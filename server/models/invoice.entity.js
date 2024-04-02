import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Invoice = sequelize.define(
  "Invoices",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    stripe_invoice_i: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoice_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invoice_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paid_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

console.log(
  "Invoice model created successfully:",
  Invoice === sequelize.models.Invoice
);

export default Invoice;
