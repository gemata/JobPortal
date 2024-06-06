import cron from "node-cron";

import { Op } from "sequelize";
import sequelize from "../config/sequelize.mjs";
import mongoose from "mongoose";
import GraphData from "../models/graphData.entity.js";
import JobPost from "../models/JobPost.entity.js";
import LikedJob from "../models/likedJob.entity.js";
import SavedJob from "../models/savedJob.entity.js";
import AppliedJob from "../models/appliedJob.entity.js";
import User from "../models/user.entity.js";
import Company from "../models/Company.entity.js";
import UserProfile from "../models/userProfile.entity.js";
import Resume from "../models/resume.entity.js";
import InterviewList from "../models/InterviewList.entity.js";
import JobField from "../models/jobfield.entity.js";
import SubscriptionPlan from "../models/subscriptionPlanSchema.js";
import PendingAccount from "../models/pendingAccount.js";
import JobPosition from "../models/jobposition.entity.js";

// Function to update JobPost status
const updateJobPostStatus = async () => {
  try {
    const currentDate = new Date();

    // Find all JobPosts where endAt date has passed and is_Active is still true
    const jobPosts = await JobPost.findAll({
      where: {
        endAt: { [Op.lt]: currentDate },
        is_Active: true,
      },
    });

    // Update the is_Active status of the found JobPosts
    if (jobPosts.length > 0) {
      for (const jobPost of jobPosts) {
        jobPost.is_Active = false;
        await jobPost.save();
      }
      console.log(`Updated ${jobPosts.length} job posts to inactive status.`);
    } else {
      console.log("No job posts to update.");
    }

    const latestRecord = await GraphData.findOne({
      order: [["createdAt", "ASC"]],
    });

    if (latestRecord) {
      await latestRecord.destroy();
    }

    const userCount = await User.count();
    const companyCount = await Company.count();
    const pendingAccountCount = await PendingAccount.countDocuments();
    const jobPostingsJan = await JobPost.count({ where: { createdAt: { [Op.between]: ['2024-01-01', '2024-01-31'] } } });
    const jobPostingsFeb = await JobPost.count({ where: { createdAt: { [Op.between]: ['2024-02-01', '2024-02-29'] } } });
    const jobPostingsMar = await JobPost.count({ where: { createdAt: { [Op.between]: ['2024-03-01', '2024-03-31'] } } });
    const jobPostingsApr = await JobPost.count({ where: { createdAt: { [Op.between]: ['2024-04-01', '2024-04-30'] } } });
    const jobPostingsMay = await JobPost.count({ where: { createdAt: { [Op.between]: ['2024-05-01', '2024-05-31'] } } });
    const jobPostingsJun = await JobPost.count({ where: { createdAt: { [Op.between]: ['2024-06-01', '2024-06-30'] } } });
    const userRegistrationsJan = await User.count({ where: { createdAt: { [Op.between]: ['2024-01-01', '2024-01-31'] } } });
    const userRegistrationsFeb = await User.count({ where: { createdAt: { [Op.between]: ['2024-02-01', '2024-02-29'] } } });
    const userRegistrationsMar = await User.count({ where: { createdAt: { [Op.between]: ['2024-03-01', '2024-03-31'] } } });
    const userRegistrationsApr = await User.count({ where: { createdAt: { [Op.between]: ['2024-04-01', '2024-04-30'] } } });
    const userRegistrationsMay = await User.count({ where: { createdAt: { [Op.between]: ['2024-05-01', '2024-05-31'] } } });
    const userRegistrationsJun = await User.count({ where: { createdAt: { [Op.between]: ['2024-06-01', '2024-06-30'] } } });
    const jobApplicationStatusApplied = await AppliedJob.count();
    const jobApplicationStatusRejected = await AppliedJob.count({ where: { status: "0" } });
    const userEngagementLoginJan = await UserProfile.count({ where: { createdAt: { [Op.between]: ['2024-01-01', '2024-01-31'] } } });
    const userEngagementLoginFeb = await UserProfile.count({ where: { createdAt: { [Op.between]: ['2024-02-01', '2024-02-29'] } } });
    const userEngagementLoginMar = await UserProfile.count({ where: { createdAt: { [Op.between]: ['2024-03-01', '2024-03-31'] } } });
    const userEngagementLoginApr = await UserProfile.count({ where: { createdAt: { [Op.between]: ['2024-04-01', '2024-04-30'] } } });
    const userEngagementLoginMay = await UserProfile.count({ where: { createdAt: { [Op.between]: ['2024-05-01', '2024-05-31'] } } });
    const userEngagementLoginJun = await UserProfile.count({ where: { createdAt: { [Op.between]: ['2024-06-01', '2024-06-30'] } } });
    const userEngagementProfileJan = await UserProfile.count({ where: { updatedAt: { [Op.between]: ['2024-01-01', '2024-01-31'] } } });
    const userEngagementProfileFeb = await UserProfile.count({ where: { updatedAt: { [Op.between]: ['2024-02-01', '2024-02-29'] } } });
    const userEngagementProfileMar = await UserProfile.count({ where: { updatedAt: { [Op.between]: ['2024-03-01', '2024-03-31'] } } });
    const userEngagementProfileApr = await UserProfile.count({ where: { updatedAt: { [Op.between]: ['2024-04-01', '2024-04-30'] } } });
    const userEngagementProfileMay = await UserProfile.count({ where: { updatedAt: { [Op.between]: ['2024-05-01', '2024-05-31'] } } });
    const userEngagementProfileJun = await UserProfile.count({ where: { updatedAt: { [Op.between]: ['2024-06-01', '2024-06-30'] } } });
    const userEngagementResumeJan = await Resume.count({ where: { updatedAt: { [Op.between]: ['2024-01-01', '2024-01-31'] } } });
    const userEngagementResumeFeb = await Resume.count({ where: { updatedAt: { [Op.between]: ['2024-02-01', '2024-02-29'] } } });
    const userEngagementResumeMar = await Resume.count({ where: { updatedAt: { [Op.between]: ['2024-03-01', '2024-03-31'] } } });
    const userEngagementResumeApr = await Resume.count({ where: { updatedAt: { [Op.between]: ['2024-04-01', '2024-04-30'] } } });
    const userEngagementResumeMay = await Resume.count({ where: { updatedAt: { [Op.between]: ['2024-05-01', '2024-05-31'] } } });
    const userEngagementResumeJun = await Resume.count({ where: { updatedAt: { [Op.between]: ['2024-06-01', '2024-06-30'] } } });
    const subscriptionRevenueBasic = await SubscriptionPlan.aggregate([{ $match: { planName: 'Basic' } }, { $group: { _id: null, total: { $sum: "$planPrice" } } }]);
    const subscriptionRevenueStandard = await SubscriptionPlan.aggregate([{ $match: { planName: 'Standard' } }, { $group: { _id: null, total: { $sum: "$planPrice" } } }]);
    const subscriptionRevenuePremium = await SubscriptionPlan.aggregate([{ $match: { planName: 'Premium' } }, { $group: { _id: null, total: { $sum: "$planPrice" } } }]);
    const interviewsScheduledJan = await InterviewList.count({ where: { time: { [Op.between]: ['2024-01-01', '2024-01-31'] } } });
    const interviewsScheduledFeb = await InterviewList.count({ where: { time: { [Op.between]: ['2024-02-01', '2024-02-29'] } } });
    const interviewsScheduledMar = await InterviewList.count({ where: { time: { [Op.between]: ['2024-03-01', '2024-03-31'] } } });
    const interviewsScheduledApr = await InterviewList.count({ where: { time: { [Op.between]: ['2024-04-01', '2024-04-30'] } } });
    const interviewsScheduledMay = await InterviewList.count({ where: { time: { [Op.between]: ['2024-05-01', '2024-05-31'] } } });
    const interviewsScheduledJun = await InterviewList.count({ where: { time: { [Op.between]: ['2024-06-01', '2024-06-30'] } } });
    const jobPostEngagementLikes = await LikedJob.count();
    const jobPostEngagementShares = await SavedJob.count();
    const jobPostEngagementViews = await JobPost.sum('likes');
    const topCompany1Count = await JobPost.count({ where: { CompanyID: 4 } });
    const topCompany2Count = await JobPost.count({ where: { CompanyID: 2 } });
    const topCompany3Count = await JobPost.count({ where: { CompanyID: 7 } });
    const topCompany4Count = await JobPost.count({ where: { CompanyID: 5 } });

    const newGraphData = await GraphData.create({
      userCount,
      companyCount,
      pendingAccountCount,
      jobPostingsJan,
      jobPostingsFeb,
      jobPostingsMar,
      jobPostingsApr,
      jobPostingsMay,
      jobPostingsJun,
      userRegistrationsJan,
      userRegistrationsFeb,
      userRegistrationsMar,
      userRegistrationsApr,
      userRegistrationsMay,
      userRegistrationsJun,
      jobApplicationStatusApplied,
      jobApplicationStatusRejected,
      userEngagementLoginJan,
      userEngagementLoginFeb,
      userEngagementLoginMar,
      userEngagementLoginApr,
      userEngagementLoginMay,
      userEngagementLoginJun,
      userEngagementProfileJan,
      userEngagementProfileFeb,
      userEngagementProfileMar,
      userEngagementProfileApr,
      userEngagementProfileMay,
      userEngagementProfileJun,
      userEngagementResumeJan,
      userEngagementResumeFeb,
      userEngagementResumeMar,
      userEngagementResumeApr,
      userEngagementResumeMay,
      userEngagementResumeJun,
      subscriptionRevenueBasic: subscriptionRevenueBasic[0] ? subscriptionRevenueBasic[0].total : 0,
      subscriptionRevenueStandard: subscriptionRevenueStandard[0] ? subscriptionRevenueStandard[0].total : 0,
      subscriptionRevenuePremium: subscriptionRevenuePremium[0] ? subscriptionRevenuePremium[0].total : 0,
      interviewsScheduledJan,
      interviewsScheduledFeb,
      interviewsScheduledMar,
      interviewsScheduledApr,
      interviewsScheduledMay,
      interviewsScheduledJun,
      jobPostEngagementLikes,
      jobPostEngagementShares,
      jobPostEngagementViews,
      jobFieldsPopular1: 'Production',
      jobFieldsPopular1Count: 122,
      jobFieldsPopular2: 'Healthcare Practicioners and Technical',
      jobFieldsPopular2Count: 92,
      jobFieldsPopular3: 'Architecture and Engineering',
      jobFieldsPopular3Count: 80,
      jobFieldsPopular4: 'Life, Physical, and Social Sciences',
      jobFieldsPopular4Count: 72,
      topCompany1: 'Gamma Enterprises',
      topCompany1Count,
      topCompany2: 'Alpha Innovations',
      topCompany2Count,
      topCompany3: 'Zeta Systems',
      topCompany3Count,
      topCompany4: 'Delta Dynamics',
      topCompany4Count,
    });
    console.log("New GraphData entry created:", newGraphData.id);
  } catch (error) {
    console.error("Error updating job post status:", error);
  }
};

// Schedule the job to run every 10 minutes
cron.schedule("*/1 * * * *", updateJobPostStatus, {
  timezone: "Etc/GMT-2", // UTC+2 timezone
});
