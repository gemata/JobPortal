import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const LikedJobs = sequelize.define(
  "LikedJobs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    LikedAt:{
        type:DataTypes.DATE,
        allowNull:false,
    }

  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log(
  "LikedJobs model created successfully:",
  LikedJobs === sequelize.models.LikedJobs
);

export default LikedJobs;