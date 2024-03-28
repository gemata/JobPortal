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
    Sex: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    FullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EmailNotificationAc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

    DateOfBirth: {
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
