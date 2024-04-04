import sequelize from "./sequelize.mjs";
import ApplicantList from "../models/applicantlist.entity.js";
import AppliedJobs from "../models/appliedJobs.entity.js";
import Company from "../models/Company.entity.js";
import CompanyLogo from "../models/CompanyLogo.entity.js";
import CompanyProfile from "../models/companyprofile.entity.js";
import Education from "../models/education.entity.js";
import InterviewList from "../models/InterviewList.entity.js";
import JobField from "../models/jobfield.entity.js";
import JobPosition from "../models/jobposition.entity.js";
import JobPost from "../models/JobPost.entity.js";
import LikedJobs from "../models/likedJobs.entity.js";
import Price from "../models/price.entity.js";
import Product from "../models/product.entity.js";
import Subscription from "../models/subscription.entity.js";
import Invoice from "../models/invoice.entity.js";
import User from "../models/user.entity.js";
import UserProfile from "../models/userProfile.entity.js";
import UserImage from "../models/userImage.entity.js";
import Resume from "../models/resume.entity.js";
import WorkExperience from "../models/workexperience.entity.js";

const dbContext = async () => {
  User.hasOne(Resume);
  Resume.belongsTo(User);

  User.hasOne(UserImage);
  UserImage.belongsTo(User);

  User.hasMany(WorkExperience);
  WorkExperience.belongsTo(User);

  User.hasMany(Education);
  Education.belongsTo(User);

  Company.hasOne(CompanyLogo);
  CompanyLogo.belongsTo(Company);

  Company.hasOne(CompanyProfile);
  CompanyProfile.belongsTo(Company);

  // Company.belongsTo(Role);

  JobPost.hasMany(InterviewList);
  InterviewList.belongsTo(JobPost);

  User.hasMany(InterviewList);
  InterviewList.belongsTo(User);

  JobPost.belongsTo(Company);
  // JobPost.belongsTo(JobPosition);

  JobPost.hasMany(ApplicantList);
  ApplicantList.belongsTo(JobPost);

  User.hasMany(ApplicantList);
  ApplicantList.belongsTo(User);

  User.hasMany(LikedJobs);
  LikedJobs.belongsTo(User);

  JobPost.hasMany(LikedJobs);
  LikedJobs.belongsTo(JobPost);

  JobPost.hasMany(AppliedJobs);
  AppliedJobs.belongsTo(JobPost);

  User.hasOne(UserProfile);
  UserProfile.belongsTo(User);

  Company.hasMany(Subscription);
  Subscription.belongsTo(Company);

  Subscription.hasMany(Invoice);
  Invoice.belongsTo(Subscription);

  Product.hasMany(Subscription);
  Subscription.belongsTo(Product);

  Product.hasOne(Price);
  Price.belongsTo(Product);

  JobField.hasOne(JobPosition);
  JobPosition.belongsTo(JobField);

  JobPost.belongsTo(JobPosition);
  JobPosition.hasMany(JobPost);

  // We should figure out Work experience and Education models
  // We can create a role model, or just keep it as a field

  await sequelize.sync({ alter: true });
};

export default dbContext;