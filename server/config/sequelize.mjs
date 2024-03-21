import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('job_portal', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export default sequelize;