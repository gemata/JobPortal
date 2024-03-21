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

// `sequelize.define` also returns the model
console.log("Creating Resume Model"); // true
console.log(Resume === sequelize.models.Resume); // true

export default Resume;
