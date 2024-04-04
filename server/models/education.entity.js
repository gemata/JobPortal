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
    degreeType: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    degreeName: {
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
      allowNull: false,
    },
    description: {
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
