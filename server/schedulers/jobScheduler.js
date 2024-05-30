import cron from 'node-cron';

import { Op } from 'sequelize';
import JobPost from '../models/JobPost.entity.js';

// Function to update JobPost status
const updateJobPostStatus = async () => {
  try {
    const currentDate = new Date();

    // Find all JobPosts where endAt date has passed and is_Active is still true
    const jobPosts = await JobPost.findAll({
      where: {
        endAt: { [Op.lt]: currentDate },
        is_Active: true
      }
    });

    // Update the is_Active status of the found JobPosts
    if (jobPosts.length > 0) {
      for (const jobPost of jobPosts) {
        jobPost.is_Active = false;
        await jobPost.save();
      }
      console.log(`Updated ${jobPosts.length} job posts to inactive status.`);
    } else {
      console.log('No job posts to update.');
    }
  } catch (error) {
    console.error('Error updating job post status:', error);
  }
};

// Schedule the job to run every 10 minutes
cron.schedule('*/10 * * * *', updateJobPostStatus, {
    timezone: 'Etc/GMT-2' // UTC+2 timezone
  });