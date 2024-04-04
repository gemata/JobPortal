import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";
//import Role from "./Role.entity.js";                           //REMOVE COMMENTS AFTER THE MODEL HAS BEEN CREATED !!!
import CompanyLogo from "./CompanyLogo.entity.js";

const Company = sequelize.define(
  "Company",
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    CompanyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "User"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FreeJobPosted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize
  }
);

export default Company;