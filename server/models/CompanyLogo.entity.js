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
    // s3Key, bucket and mime are needed for file storage and maintenance
    s3Key: {
      type: DataTypes.STRING,
      field: 's3_key',
    },
    bucket: {
      type: DataTypes.STRING,
    },
    mime: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize
  }
);

export default CompanyLogo;