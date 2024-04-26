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
    },
    resetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetTokenExpire: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    sequelize, // We need to pass the connection instance
  });

console.log("User model created successfully:", User === sequelize.models.User);

export default User;
