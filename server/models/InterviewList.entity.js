import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const InterviewList = sequelize.define(
  "InterviewList",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    onlineLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    stage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_Selected: {
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