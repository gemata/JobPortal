import sequelize from "./sequelize.mjs";
import mongooseConnection from "./mongoose.js";
import User from '../models/user.entity.js';
import Company from '../models/Company.entity.js';
import PendingAccount from "../models/pendingAccount.js";

const dashboardHandler = async () => {

  const usersCount = await User.count();
  const companiesCount = await Company.count();
  const pendingAccountsCount = await PendingAccount.countDocuments();

  return {
    message: "Data from handler",
    accountTypesData: {
      labels: ['Users', 'Companies', 'Pending'],
      datasets: [
        {
          label: 'Account Types',
          data: [usersCount, companiesCount, pendingAccountsCount],
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
          data: [12, 19, 3, 5, 2, 3],
          fill: 'start',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.3,
        },
        {
          label: 'User Registrations',
          data: [50, 30, 70, 40, 60, 80],
          fill: 'start',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.3,
        },
      ],
    },
    jobApplicationStatusData: {
      labels: ['Applied', 'Shortlisted', 'Rejected'],
      datasets: [
        {
          label: 'Job Application Status',
          data: [60, 25, 15],
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
          data: [100, 120, 150, 130, 140, 160],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          fill: false,
          tension: 0.2,
        },
        {
          label: 'Profile Completions',
          data: [50, 60, 70, 80, 90, 100],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          fill: false,
          tension: 0.2,
        },
        {
          label: 'Resume Uploads',
          data: [20, 25, 30, 35, 40, 45],
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
          data: [[2000], [3500], [5000]],
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
          data: [10, 15, 20, 18, 22, 25],
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderColor: 'rgb(76, 175, 80)',
          fill: 'start',
        },
      ],
    },
    jobPostEngagementData: {
      labels: ['Job 1', 'Job 2', 'Job 3', 'Job 4'],
      datasets: [
        {
          label: 'Likes',
          data: [20, 15, 10, 25],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          fill: 'start',
          tension: 0.3,
        },
        {
          label: 'Shares',
          data: [10, 12, 8, 15],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          fill: 'start',
          tension: 0.3,
        },
        {
          label: 'Views',
          data: [30, 25, 20, 35],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgb(255, 206, 86)',
          fill: 'start',
          tension: 0.3,
        },
      ],
    },
    jobFieldsData: {
      labels: ['IT', 'Finance', 'Marketing', 'Engineering'],
      datasets: [
        {
          label: 'Job Fields',
          data: [30, 25, 20, 25],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(76, 175, 80, 0.2)'],
          borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)', 'rgb(76, 175, 80)'],
          borderWidth: 1,
        },
      ],
    },
    topCompaniesData: {
      labels: ['Company A', 'Company B', 'Company C', 'Company D'],
      datasets: [
        {
          label: 'Number of Job Postings',
          data: [25, 20, 18, 15],
          backgroundColor: 'rgba(76,175,80, 0.2)',
          borderColor: 'rgb(76,175,80)',
          borderWidth: 1,
        },
      ],
    }
  };
};
export default dashboardHandler;