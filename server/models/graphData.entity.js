import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const GraphData = sequelize.define(
  "GraphData",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    is_Active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    interviewMethod: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    salary_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 999999,
      },
    },
    salary_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 999999,
      },
    },
    jobLocation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    education: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    nationality: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },

    nrApplicants: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    interviewActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    interviewStart: {
      type: DataTypes.DATE,
      defaultValue: false,
      allowNull: false,
    },
    interviewAddress: {
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: true,
    },
    interviewLink: {
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: true,
    },
    interviewNrCandidates: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    sequelize
  }
);

console.log(
  "GraphData model created successfully:",
  GraphData === sequelize.models.GraphData
);

export default GraphData;