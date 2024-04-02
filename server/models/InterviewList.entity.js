import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const InterviewList = sequelize.define(
  "InterviewList",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    OnlineLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Stage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Is_Selected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize
  }
);

console.log(
  "InterviewList model created successfully:",
  InterviewList === sequelize.models.InterviewList
);

export default InterviewList;