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
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    companyEmail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
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
