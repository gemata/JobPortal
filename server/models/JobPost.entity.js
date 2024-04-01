import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";
import Company from "./Company.entity.js";                           
//import JobPosition from "./JobPosition";   //REMOVE COMMENTS AFTER THE MODEL HAS BEEN CREATED !!!

const JobPost = sequelize.define(
    "JobPost",
    {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Company_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Company,
        key: 'ID'
      }
    },
    JobPosition_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: JobPosition,
        key: 'ID'
      }
    },
    JobDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    JobSummary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Experience_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Is_Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    StartAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EndAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    InterviewMethod: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    AnnualSalary_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AnnualSalary_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    JobLocation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Education: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Natonality: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    JobType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize
  }
);

// The 2 lines below can also be added in the dbcontext file 
JobPost.belongsTo(Company, { foreignKey: 'Company_ID' }); // Each JobPost belongs to a Company
JobPost.belongsTo(JobPosition, { foreignKey: 'JobPosition_ID' }); // Each JobPost belongs to a JobPosition

console.log(
  "JobPost model created successfully:",
  JobPost === sequelize.models.JobPost
);

export default JobPost;