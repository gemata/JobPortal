import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Testimonial = sequelize.define(
  "Testimonial",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Testimonial'
  }
);

console.log(
  "Testimonial model created successfully:",
  Testimonial === sequelize.models.Testimonial
);

export default Testimonial;
