import sequelize from "../config/sequelize.mjs";
import ApplicantList from "./applicantlist.entity.js";
import AppliedJobs from "./appliedJobs.entity.js";
import Company from "./Company.entity.js";
import CompanyLogo from "./CompanyLogo.entity.js";
import CompanyProfile from "./companyprofile.entity.js";
import Education from "./education.entity.js";
import InterviewList from "./InterviewList.entity.js";
import JobField from "./jobfield.entity.js";
import JobPosition from "./jobposition.entity.js";
import JobPost from "./JobPost.entity.js";
import LikedJobs from "./likedJobs.entity.js";
import Price from "./price.entity.js";
import Product from "./product.entity.js";
import Subscription from "./subscription.entity.js";
import Invoice from "./invoice.entity.js";
import User from "./user.entity.js";
import UserProfile from "./userProfile.entity.js";
import UserImage from "./userImage.entity.js";
import Resume from "./resume.entity.js";
import WorkExperience from "./workexperience.entity.js";

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
  CompanyLogo.belongsTo(Company, { foreignKey: 'Company_ID' });

  Company.hasOne(CompanyProfile);
  CompanyProfile.belongsTo(Company);

  // Company.belongsTo(Role, { foreignKey: 'Role_ID' });

  JobPost.hasMany(InterviewList);
  InterviewList.belongsTo(JobPost, { foreignKey: 'JobPost_ID' });

  User.hasMany(InterviewList);
  InterviewList.belongsTo(User, { foreignKey: 'User_ID' });

  JobPost.belongsTo(Company, { foreignKey: 'Company_ID' });
  // JobPost.belongsTo(JobPosition, { foreignKey: 'JobPosition_ID' });

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

  // We should figure out Job Post FK relations
  // We should figure out Work experience and Education models
  // We can create a role model, or just keep it as a field

  await sequelize.sync({ alter: true });
};

export default dbContext;
