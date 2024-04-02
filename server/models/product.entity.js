import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Product = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    stripe_product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Offer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

console.log(
  "Product model created successfully:",
  Product === sequelize.models.Product
);

export default Product;
