import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const UserReport = sequelize.define(
  "UserReport",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    User: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Company: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Note: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },
  {
    sequelize
  }
);

console.log("User Report model created successfully:", UserReport === sequelize.models.UserReport);
export default UserReport;