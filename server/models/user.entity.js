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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, // We need to pass the connection instance
  });

console.log("Creating User Model");
console.log(User === sequelize.models.User); // true

export default User;
