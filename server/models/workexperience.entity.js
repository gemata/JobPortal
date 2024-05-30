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
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentlyWorkingHere: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log(
  "WorkExperience model created successfully:",
  WorkExperience === sequelize.models.WorkExperience
);

export default WorkExperience;
