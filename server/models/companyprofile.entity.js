import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const CompanyProfile = sequelize.define(
  "CompanyProfile",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    CompanyID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    PhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    EmailNotification_ac: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Addres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CompanyEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log(
  "CompanyProfile model created successfully:",
  CompanyProfile === sequelize.models.CompanyProfile
);

export default CompanyProfile;
