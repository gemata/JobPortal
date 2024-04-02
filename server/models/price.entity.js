import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Price = sequelize.define(
  "Prices",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize,
  }
);

console.log(
  "Price model created successfully:",
  Price === sequelize.models.Price
);

export default Price;
