import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const WorkExperience = sequelize.define(
  "WorkExperience",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    JobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    SchoolName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SchoolName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    JobType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SchoolName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CurrentlyStudyHere: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log(
  "WorkExperince model created successfully:",
  WorkExperience === sequelize.models.WorkExperience
);

export default WorkExperience;
