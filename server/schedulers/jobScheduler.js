import cron from 'node-cron';

import { Op } from 'sequelize';
import JobPost from '../models/JobPost.entity.js';
import GraphData from '../models/graphData.entity.js';

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

    const latestRecord = await GraphData.findOne({
      order: [['createdAt', 'ASC']],
    });

    await latestRecord.destroy();

    const newGraphData = await GraphData.create({
      userCount: 100,
      companyCount: 50,
      pendingAccountCount: 10,
      jobPostingsJan: 20,
      jobPostingsFeb: 15,
      jobPostingsMar: 25,
      jobPostingsApr: 30,
      jobPostingsMay: 18,
      jobPostingsJun: 22,
      userRegistrationsJan: 50,
      userRegistrationsFeb: 45,
      userRegistrationsMar: 60,
      userRegistrationsApr: 55,
      userRegistrationsMay: 70,
      userRegistrationsJun: 65,
      jobApplicationStatusApplied: 120,
      jobApplicationStatusRejected: 30,
      userEngagementLoginJan: 200,
      userEngagementLoginFeb: 180,
      userEngagementLoginMar: 210,
      userEngagementLoginApr: 220,
      userEngagementLoginMay: 205,
      userEngagementLoginJun: 215,
      userEngagementProfileJan: 150,
      userEngagementProfileFeb: 130,
      userEngagementProfileMar: 160,
      userEngagementProfileApr: 140,
      userEngagementProfileMay: 165,
      userEngagementProfileJun: 170,
      userEngagementResumeJan: 120,
      userEngagementResumeFeb: 110,
      userEngagementResumeMar: 125,
      userEngagementResumeApr: 130,
      userEngagementResumeMay: 115,
      userEngagementResumeJun: 120,
      subscriptionRevenueBasic: 5000,
      subscriptionRevenueStandard: 7000,
      subscriptionRevenuePremium: 10000,
      interviewsScheduledJan: 30,
      interviewsScheduledFeb: 20,
      interviewsScheduledMar: 40,
      interviewsScheduledApr: 35,
      interviewsScheduledMay: 25,
      interviewsScheduledJun: 45,
      jobPostEngagementLikes: 300,
      jobPostEngagementShares: 200,
      jobPostEngagementViews: 400,
      jobFieldsPopular1: 'Engineering',
      jobFieldsPopular1Count: 80,
      jobFieldsPopular2: 'Marketing',
      jobFieldsPopular2Count: 60,
      jobFieldsPopular3: 'Design',
      jobFieldsPopular3Count: 40,
      jobFieldsPopular4: 'Sales',
      jobFieldsPopular4Count: 50,
      topCompany1: 'Tech Corp',
      topCompany1Count: 100,
      topCompany2: 'Innovate LLC',
      topCompany2Count: 75,
      topCompany3: 'BuildIt Inc.',
      topCompany3Count: 65,
      topCompany4: 'Create Solutions',
      topCompany4Count: 55
    });
    console.log('New GraphData entry created:', newGraphData.id);

  } catch (error) {
    console.error('Error updating job post status:', error);
  }
};

// Schedule the job to run every 10 minutes
cron.schedule('*/10 * * * *', updateJobPostStatus, {
  timezone: 'Etc/GMT-2' // UTC+2 timezone
});