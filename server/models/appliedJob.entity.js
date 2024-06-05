import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const AppliedJob = sequelize.define(
  "AppliedJob",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    appliedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }

  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log(
  "AppliedJob model created successfully:",
  AppliedJob === sequelize.models.AppliedJob
);

export default AppliedJob;