import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/sequelize.mjs";

const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, // We need to pass the connection instance
});

console.log("Creating Job Model");
console.log(Job === sequelize.models.Job);

export default Job;