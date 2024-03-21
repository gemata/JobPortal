import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';
import sequelize from './config/sequelize.mjs';
// import mongoose from './config/mongoose.js';
import * as AdminJSSequelize from '@adminjs/sequelize';
import mongoose from 'mongoose';

export default mongoose;
import User from './models/user.entity.js';
import Job from './models/job.entity.js';
import Post from './models/post.entity.js';
import Resume from './models/resume.entity.js';

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const PORT = 5000;

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}

const start = async () => {
  const app = express();

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return;
  }

  const admin = new AdminJS({
    resources: [
      {
        resource: User,
        options: {
          parent: "mySQL",
          listProperties: ['id', 'firstName', 'lastName', 'createdAt', 'updatedAt'],
        },
      },
      {
        resource: Job,
        options:
          { parent: "mySQL", listProperties: ['id', 'name', 'createdAt', 'updatedAt'] }
      },
      {
        resource: Post,
        options:
          { parent: "mySQL", listProperties: ['id', 'name', 'createdAt', 'updatedAt'] }
      },
      {
        resource: Resume,
        options:
          { parent: "mySQL", listProperties: ['id', 'type', 'employeeId'] }
      }
    ],
    rootPath: '/admin' // Specify the root path for AdminJS
  });

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: 'adminjs',
      cookiePassword: 'sessionsecret',
    },
    null,
    {
      resave: true,
      saveUninitialized: true,
    }
  );
  app.use(admin.options.rootPath, adminRouter);

  app.get('/', (req, res) => {
    res.send('Hello from Express server!');
  });

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
  });
};

start();
