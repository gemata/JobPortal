import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const SavedJob = sequelize.define(
  "SavedJob",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log(
  "SavedJob model created successfully:",
  SavedJob === sequelize.models.SavedJob
);

export default SavedJob;