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
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emailNotification_ac: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
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
