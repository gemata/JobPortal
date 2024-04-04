import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const JobField = sequelize.define(
  "JobField",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    field: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log(
  "JobField model created successfully:",
  JobField === sequelize.models.JobField
);

export default JobField;
