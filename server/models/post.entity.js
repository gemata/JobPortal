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

// `sequelize.define` also returns the model
console.log("Creating Post Model"); // true
console.log(Post === sequelize.models.Post); // true

export default Post;
