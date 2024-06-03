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
    interviewMethod: {
      type: DataTypes.STRING,
      allowNull: true, // Adjust as necessary
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
      defaultValue:1,
      allowNull: false,
    },
    is_Selected: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
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