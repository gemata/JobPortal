import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Resume = sequelize.define(
  "Resume",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log("Resume model created successfully:", Resume === sequelize.models.Resume);

export default Resume;
