import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";
import Job from "./job.entity.js";
import User from "./user.entity.js";
import Post from "./post.entity.js";
import Resume from "./resume.entity.js";
import WorkExperience from "./workexperience.entity.js";
import Education from "./education.entity.js";
import ApplicantList from "./applicantlist.entity.js";

const dbContext = async () => {
  Job.hasMany(User);
  User.belongsTo(Job);

  User.hasOne(Resume);
  Resume.belongsTo(User);

  User.hasMany(WorkExperience);
  WorkExperience.belongsTo(User);

  User.hasMany(Education);
  Education.belongsTo(User);

  User.hasMany(ApplicantList);
  ApplicantList.belongsTo(User);

  // Applicant List relation with Job Post required

  await sequelize.sync({ alter: true });
};

export default dbContext;
