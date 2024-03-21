import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';
import sequelize from './config/sequelize.mjs';
import mongooseConnection from './config/mongoose.js';
import * as AdminJSSequelize from '@adminjs/sequelize';
import * as AdminJSMongoose from '@adminjs/mongoose'
import dbContext from './models/dbContext.js';
import argon2 from 'argon2';
import passwordsFeature from '@adminjs/passwords';
import { componentLoader } from './components.js';

import User from './models/user.entity.js';
import Job from './models/job.entity.js';
import Post from './models/post.entity.js';
import Resume from './models/resume.entity.js';
import Category from './models/category.entity.js';
import userRouter from './routes/user.router.js';

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const PORT = 5000;

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async (email, password) => {
  try {

    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      return Promise.resolve(DEFAULT_ADMIN)
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const passwordMatch = await argon2.verify(user.password, password);

    if (passwordMatch && user.role === "Admin") {
      return Promise.resolve(user);
    }
    return null;
  } catch (error) {
    console.error('Error authenticating user:', error);
    return null;
  }
}


const start = async () => {
  const app = express();

  try {
    await sequelize.authenticate();
    console.log('Sequelize connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the sequelize database:', error);
    return;
  }

  (async () => {
    try {
      await dbContext();
      console.log("dbContext have been set up successfully.");
    } catch (error) {
      console.error("Error setting up dbContext:", error);
    }
  })();

  (async () => {
    try {
      await mongooseConnection();
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.error("Error setting up MongoDB:", error);
    }
  })();

  const admin = new AdminJS({
    componentLoader,
    resources: [
      {
        resource: User,
        options: {
          parent: "mySQL",
          listProperties: ['id', 'email', 'firstName', 'lastName', 'JobId', 'role'],
          showProperties: ['id', 'email', 'firstName', 'lastName', 'JobId', 'createdAt', 'updatedAt', 'role'],
          editProperties: ['email', 'email', 'firstName', 'lastName', 'newPassword', 'JobId', 'role'],
          properties: { password: { isVisible: false } },
        },
        features: [
          passwordsFeature({
            componentLoader,
            properties: {
              password: 'newPassword',
              encryptedPassword: 'password',
            },
            hash: argon2.hash,
          }),
        ]
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
          { parent: "mySQL", listProperties: ['id', 'type', 'UserId'] }
      },
      {
        resource: Category,
        options: {
          parent: "mongoDB",
        },
      }
    ],
    componentLoader,
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
      resave: false,
      saveUninitialized: true,
    }
  );
  app.use(admin.options.rootPath, adminRouter);

  
  
  // Middleware to parse JSON bodies
  app.use(express.json());
  
  // Use user routes
  app.use('/api/users', userRouter);

  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
  });

  if (process.env.NODE_ENV === 'production') await admin.initialize();
  else admin.watch();
};

start();
