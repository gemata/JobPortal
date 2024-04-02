import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";
import Job from "./job.entity.js";
import User from "./user.entity.js";
import Post from "./post.entity.js";
import Resume from "./resume.entity.js";
import WorkExperience from "./workexperience.entity.js";
import Education from "./education.entity.js";
import ApplicantList from "./applicantlist.entity.js";
import Company from "./Company.entity.js";
import CompanyLogo from "./CompanyLogo.entity.js";
import InterviewList from "./InterviewList.entity.js";
import JobPost from "./JobPost.entity.js";
import UserImage from "./userImage.entity.js";

const dbContext = async () => {
  Job.hasMany(User);
  User.belongsTo(Job);

  User.hasOne(Resume);
  Resume.belongsTo(User);

  User.hasOne(UserImage);
  UserImage.belongsTo(User);

  User.hasMany(WorkExperience);
  WorkExperience.belongsTo(User);

  User.hasMany(Education);
  Education.belongsTo(User);

  User.hasMany(ApplicantList);
  ApplicantList.belongsTo(User);

  CompanyLogo.belongsTo(Company, { foreignKey: 'Company_ID' });
  Company.hasOne(CompanyLogo);

  // Company.belongsTo(Role, { foreignKey: 'Role_ID' });

  InterviewList.belongsTo(JobPost, { foreignKey: 'JobPost_ID' });
  InterviewList.belongsTo(User, { foreignKey: 'User_ID' });

  JobPost.belongsTo(Company, { foreignKey: 'Company_ID' });
  // JobPost.belongsTo(JobPosition, { foreignKey: 'JobPosition_ID' });

  JobPost.hasMany(ApplicantList);
  ApplicantList.belongsTo(JobPost);

  await sequelize.sync({ alter: true });
};

export default dbContext;
