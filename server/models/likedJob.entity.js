import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const LikedJob = sequelize.define(
  "LikedJob",
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
  "LikedJob model created successfully:",
  LikedJob === sequelize.models.LikedJob
);

export default LikedJob;