import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const UserProfile = sequelize.define(
  "UserProfile",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sex: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailNotification_ac: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },

  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log(
  "UserProfile model created successfully:",
  UserProfile === sequelize.models.UserProfile
);

export default UserProfile;
