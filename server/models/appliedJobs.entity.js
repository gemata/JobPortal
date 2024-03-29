import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const AppliedJobs = sequelize.define(
  "AppliedJobs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Status:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    },
    AppliedAt:{
        type:DataTypes.DATE,
        allowNull:false,
    }

  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log(
  "AppliedJobs model created successfully:",
  AppliedJobs === sequelize.models.AppliedJobs
);

export default AppliedJobs;