import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/sequelize.mjs";
import Job from './job.entity.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  sequelize, // We need to pass the connection instance
  freezeTableName: true,
});

User.belongsTo(Job, {
  type: DataTypes.INTEGER,
  foreignKey: "jobId"
});
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

await User.sync({ alter: true });

export default User;