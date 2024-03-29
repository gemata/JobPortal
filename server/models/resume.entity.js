import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Resume = sequelize.define(
  "Resume",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // s3Key, bucket and mime are needed for file storage and maintenance
    s3Key: {
      type: DataTypes.STRING,
      field: 's3_key',
    },
    bucket: {
      type: DataTypes.STRING,
    },
    mime: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log("Resume model created successfully:", Resume === sequelize.models.Resume);

export default Resume;
