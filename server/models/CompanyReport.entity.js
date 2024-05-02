import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const CompanyReport = sequelize.define(
  "CompanyReport",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Company: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    User: {
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

console.log("Company Report model created successfully:", CompanyReport === sequelize.models.CompanyReport);
export default CompanyReport;