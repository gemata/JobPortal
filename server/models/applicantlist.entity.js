import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const ApplicantList = sequelize.define(
  "ApplicantList",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    isSelected: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    resumeAIScore: {
      type: DataTypes.FLOAT(1, 0),

    }
  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log("ApplicantList model created successfully:", ApplicantList === sequelize.models.ApplicantList);

export default ApplicantList;
