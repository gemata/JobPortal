import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";
//import JobPosition from "./JobPosition";   //REMOVE COMMENTS AFTER THE MODEL HAS BEEN CREATED !!!

const JobPost = sequelize.define(
  "JobPost",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    jobSummary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // experience_min: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    is_Active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    interviewMethod: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    salary_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 999999,
      },
    },
    salary_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 999999,
      },
    },
    jobLocation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    education: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    nationality: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    
    nrApplicants: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    interviewActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize
  }
);

console.log(
  "JobPost model created successfully:",
  JobPost === sequelize.models.JobPost
);

export default JobPost;