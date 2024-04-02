import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const CompanyLogo = sequelize.define(
  "CompanyLogo",

  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    sequelize
  }
);

export default CompanyLogo;