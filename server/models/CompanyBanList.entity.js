import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const CompanyBanList = sequelize.define(
  "CompanyBanList",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    CompanyBanned: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BannedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Reason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Appeal: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },
  {
    sequelize
  }
);

console.log("Job Post Report model created successfully:", CompanyBanList === sequelize.models.CompanyBanList);
export default CompanyBanList;