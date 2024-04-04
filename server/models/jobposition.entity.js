import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const JobPosition = sequelize.define(
  "Job Position",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

console.log(
  "JobPosition model created successfully:",
  JobPosition === sequelize.models.JobPosition
);

export default JobPosition;
