import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const UserImage = sequelize.define(
  "UserImage",
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

console.log("UserImage model created successfully:", UserImage === sequelize.models.UserImage);

export default UserImage;
