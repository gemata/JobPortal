import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const UserBanList = sequelize.define(
  "UserBanList",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserBanned: {
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

console.log("User Ban List model created successfully:", UserBanList === sequelize.models.UserBanList);
export default UserBanList;