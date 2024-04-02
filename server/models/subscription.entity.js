import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Subscription = sequelize.define(
  "Subscriptions",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    stripe_subscription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plan_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expired_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

console.log(
  "Subscription model created successfully:",
  Subscription === sequelize.models.Subscription
);

export default Subscription;
