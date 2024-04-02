import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Products = sequelize.define(
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
  Products === sequelize.models.Products
);

export default Products;
