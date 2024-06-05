import sequelize from "./sequelize.mjs";
import mongooseConnection from "./mongoose.js";
import GraphData from "../models/graphData.entity.js";

const dashboardHandler = async () => {

  const latestRecord = await GraphData.findOne({
    order: [['createdAt', 'ASC']],
  });

  return {
    message: "Data from handler",
    accountTypesData: {
      labels: ['Users', 'Companies', 'Pending'],
      datasets: [
        {
          label: 'Account Types',
          data: [latestRecord.userCount, latestRecord.companyCount, latestRecord.pendingAccountCount],
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 205, 86, 0.5)'],
          borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          hoverOffset: 3,
        },
      ],
    },
    postingsUserData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Job Postings',
          data: [latestRecord.jobPostingsJan, latestRecord.jobPostingsFeb, latestRecord.jobPostingsMar, latestRecord.jobPostingsApr, latestRecord.jobPostingsMay, latestRecord.jobPostingsJun],
          fill: 'start',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.3,
        },
        {
          label: 'User Registrations',
          data: [latestRecord.userRegistrationsJan, latestRecord.userRegistrationsFeb, latestRecord.userRegistrationsMar, latestRecord.userRegistrationsApr, latestRecord.userRegistrationsMay, latestRecord.userRegistrationsJun],
          fill: 'start',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.3,
        },
      ],
    },
    jobApplicationStatusData: {
      labels: ['Applied', 'Rejected'],
      datasets: [
        {
          label: 'Job Application Status',
          data: [latestRecord.jobApplicationStatusApplied, latestRecord.jobApplicationStatusRejected],
          borderColor: ['rgb(54, 162, 235)', 'rgb(255, 206, 86)', 'rgb(255, 99, 132)'],
          backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(255, 99, 132, 0.5)'],
        },
      ],
    },
    userEngagementData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'User Logins',
          data: [latestRecord.userEngagementLoginJan, latestRecord.userEngagementLoginFeb, latestRecord.userEngagementLoginMar, latestRecord.userEngagementLoginApr, latestRecord.userEngagementLoginMay, latestRecord.userEngagementLoginJun],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          fill: false,
          tension: 0.2,
        },
        {
          label: 'Profile Completions',
          data: [latestRecord.userEngagementProfileJan, latestRecord.userEngagementProfileFeb, latestRecord.userEngagementProfileMar, latestRecord.userEngagementProfileApr, latestRecord.userEngagementProfileMay, latestRecord.userEngagementProfileJun],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          fill: false,
          tension: 0.2,
        },
        {
          label: 'Resume Uploads',
          data: [latestRecord.userEngagementResumeJan, latestRecord.userEngagementResumeFeb, latestRecord.userEngagementResumeMar, latestRecord.userEngagementResumeApr, latestRecord.userEngagementResumeMay, latestRecord.userEngagementResumeJun],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgb(255, 206, 86)',
          fill: false,
          tension: 0.2,
        },
      ],
    },
    subscriptionRevenueData: {
      labels: ['Basic', 'Standard', 'Premium'],
      datasets: [
        {
          label: 'Subscription Revenue',
          data: [[latestRecord.subscriptionRevenueBasic], [latestRecord.subscriptionRevenueStandard], [latestRecord.subscriptionRevenuePremium]],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
          borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)'],
          borderWidth: 1,
        },
      ],
    },
    interviewsScheduledData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Interviews Scheduled',
          data: [latestRecord.interviewsScheduledJan, latestRecord.interviewsScheduledFeb, latestRecord.interviewsScheduledMar, latestRecord.interviewsScheduledApr, latestRecord.interviewsScheduledMay, latestRecord.interviewsScheduledJun],
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderColor: 'rgb(76, 175, 80)',
          fill: 'start',
        },
      ],
    },
    jobPostEngagementData: {
      labels: ['Likes', 'Shares', 'Views'],
      datasets: [
        {
          label: 'Job Application Status',
          data: [latestRecord.jobPostEngagementLikes, latestRecord.jobPostEngagementShares, latestRecord.jobPostEngagementViews],
          borderColor: ['rgb(54, 162, 235)', 'rgb(255, 206, 86)', 'rgb(255, 99, 132)'],
          backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(255, 99, 132, 0.5)'],
        },
      ],
    },
    jobFieldsData: {
      labels: [latestRecord.jobFieldsPopular1, latestRecord.jobFieldsPopular2, latestRecord.jobFieldsPopular3, latestRecord.jobFieldsPopular4],
      datasets: [
        {
          label: 'Job Fields',
          data: [latestRecord.jobFieldsPopular1Count, latestRecord.jobFieldsPopular2Count, latestRecord.jobFieldsPopular3Count, latestRecord.jobFieldsPopular4Count],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(76, 175, 80, 0.2)'],
          borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)', 'rgb(76, 175, 80)'],
          borderWidth: 1,
        },
      ],
    },
    topCompaniesData: {
      labels: [latestRecord.topCompany1, latestRecord.topCompany2, latestRecord.topCompany3, latestRecord.topCompany4],
      datasets: [
        {
          label: 'Number of Job Postings',
          data: [latestRecord.topCompany1Count, latestRecord.topCompany2Count, latestRecord.topCompany3Count, latestRecord.topCompany4Count],
          backgroundColor: 'rgba(76,175,80, 0.2)',
          borderColor: 'rgb(76,175,80)',
          borderWidth: 1,
        },
      ],
    }
  };
};
export default dashboardHandler;