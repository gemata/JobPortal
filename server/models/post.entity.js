import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // We need to pass the connection instance
  }
);

console.log("Post model created successfully:", Post === sequelize.models.Post);

export default Post;
