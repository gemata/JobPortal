import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";
import JobPost from "./JobPost.entity";
import User from "./user.entity";


const InterviewList = sequelize.define(
    "InterviewList",
{
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    JobPost_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: JobPost,
        key: 'ID'
      }
    },
    User_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'ID'
      }
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

// The 2 lines below can also be added in the dbcontext file 
// Define associations
InterviewList.belongsTo(JobPost, { foreignKey: 'JobPost_ID' });
InterviewList.belongsTo(User, { foreignKey: 'User_ID' });

console.log(
  "InterviewList model created successfully:",
  InterviewList === sequelize.models.InterviewList
);

export default InterviewList;