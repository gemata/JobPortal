import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const JobPostReport = sequelize.define(
  "JobPostReport",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    User: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    JobPost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Note: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },
  {
    sequelize
  }
);

console.log("Job Post Report model created successfully:", JobPostReport === sequelize.models.JobPostReport);
export default JobPostReport;