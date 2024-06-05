import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const GraphData = sequelize.define(
  "GraphData",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    companyCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    pendingAccountCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobPostingsJan: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobPostingsFeb: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobPostingsMar: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobPostingsApr: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobPostingsMay: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobPostingsJun: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userRegistrationsJan: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userRegistrationsFeb: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userRegistrationsMar: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userRegistrationsApr: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userRegistrationsMay: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userRegistrationsJun: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobApplicationStatusApplied: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobApplicationStatusRejected: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementLoginJan: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementLoginFeb: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementLoginMar: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementLoginApr: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementLoginMay: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementLoginJun: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementProfileJan: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementProfileFeb: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementProfileMar: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementProfileApr: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementProfileMay: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementProfileJun: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementResumeJan: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementResumeFeb: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementResumeMar: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementResumeApr: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementResumeMay: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userEngagementResumeJun: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    subscriptionRevenueBasic: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    subscriptionRevenueStandard: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    subscriptionRevenuePremium: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    interviewsScheduledJan: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    interviewsScheduledFeb: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    interviewsScheduledMar: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    interviewsScheduledApr: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    interviewsScheduledMay: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    interviewsScheduledJun: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobPostEngagementLikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobPostEngagementShares: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobPostEngagementViews: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobFieldsPopular1: {
      type: DataTypes.STRING,
    },
    jobFieldsPopular1Count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobFieldsPopular2: {
      type: DataTypes.STRING,
    },
    jobFieldsPopular2Count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobFieldsPopular3: {
      type: DataTypes.STRING,
    },
    jobFieldsPopular3Count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jobFieldsPopular4: {
      type: DataTypes.STRING,
    },
    jobFieldsPopular4Count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    topCompany1: {
      type: DataTypes.STRING,
    },
    topCompany1Count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    topCompany2: {
      type: DataTypes.STRING,
    },
    topCompany2Count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    topCompany3: {
      type: DataTypes.STRING,
    },
    topCompany3Count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    topCompany4: {
      type: DataTypes.STRING,
    },
    topCompany4Count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize
  }
);

console.log(
  "GraphData model created successfully:",
  GraphData === sequelize.models.GraphData
);

export default GraphData;