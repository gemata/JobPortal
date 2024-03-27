import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true
    },
    // s3Key, bucket and mime are needed for file storage and maintenance
    s3Key: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 's3_key',
      defaultValue: 'defaultIcon.png'
    },
    bucket: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'public'
    },
    mime: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'image/png'
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "User"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize, // We need to pass the connection instance
  });

console.log("User model created successfully:", User === sequelize.models.User);

export default User;
