import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";
import Company from "./Company.entity";


const CompanyLogo = sequelize.define(
    "CompanyLogo",

{
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Company_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Company,
        key: 'ID'
      }
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

// Define associations
CompanyLogo.belongsTo(Company, { foreignKey: 'Company_ID' });

export default CompanyLogo;