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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailNotification_ac: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
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
