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
    
    // s3Key, bucket and mime are needed for file storage and maintenance
    s3Key: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 's3_key',
      },
      bucket: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mime: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    Email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    CompanyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Password_Hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Role_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: 'ID'
      }
    },
    CompanyLogo_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CompanyLogo,
        key: 'ID'
      }
      
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

// Define associations
Company.belongsTo(CompanyLogo, { foreignKey: 'CompanyLogo_ID' });
Company.belongsTo(Role, { foreignKey: 'Role_ID' });

export default Company;