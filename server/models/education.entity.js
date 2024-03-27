import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Education = sequelize.define(
  "Education",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    DegreeType: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    DegreeName: {
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
    JobType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CurrentlyWorkingHere: {
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
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log(
  "Education model created successfully:",
  Education === sequelize.models.Education
);

export default Education;
