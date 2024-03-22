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
import importExportFeature from '@adminjs/import-export';
import { componentLoader } from './components.js';
import connectSessionStore from "connect-session-sequelize";
import { Store as SessionStore } from 'express-session';
import cookieParser from 'cookie-parser';
import { dark, light, noSidebar } from '@adminjs/themes'

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

    if (passwordMatch && user.role !== "User") {
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
  app.use(cookieParser());
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
    defaultTheme: light.id,
    availableThemes: [dark, light],
    componentLoader,
    resources: [
      {
        resource: User,
        options: {
          parent: "mySQL",
          listProperties: ['id', 'email', 'firstName', 'lastName', 'JobId', 'role'],
          showProperties: ['id', 'email', 'firstName', 'lastName', 'JobId', 'createdAt', 'updatedAt', 'role'],
          editProperties: ['email', 'email', 'firstName', 'lastName', 'newPassword', 'JobId', 'role'],
          properties: {
            password: { isVisible: false },
            role: {
              availableValues: [
                { value: 'User', label: 'User' },
                { value: 'Admin', label: 'Admin' },
                { value: 'Editor', label: 'Editor' },
              ],
            },
          },
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
          importExportFeature({ componentLoader }),
        ]
      },
      {
        resource: Job,
        options:
          { parent: "mySQL", listProperties: ['id', 'name', 'createdAt', 'updatedAt'] },
        features: [importExportFeature({ componentLoader })]
      },
      {
        resource: Post,
        options:
          { parent: "mySQL", listProperties: ['id', 'name', 'createdAt', 'updatedAt'] },
        features: [importExportFeature({ componentLoader })]
      },
      {
        resource: Resume,
        options:
          { parent: "mySQL", listProperties: ['id', 'type', 'UserId'] },
        features: [importExportFeature({ componentLoader })]
      },
      {
        resource: Category,
        options:
          { parent: "mongoDB", listProperties: ['_id', 'title', 'createdAt', 'updatedAt'], editProperties: ['title'] },
        features: [importExportFeature({ componentLoader })]
      }
    ],
    rootPath: '/admin' // Specify the root path for AdminJS
  });

  const SequelizeStore = connectSessionStore(SessionStore);
  const sessionStore = new SequelizeStore({ db: sequelize, expiration: 3600 });

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: 'userSessionToken',
      cookiePassword: 'sessionsecret',
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: 'sessionsecret',
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
      },
      name: 'userSessionToken',
    }
  );
  app.use(admin.options.rootPath, adminRouter);

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Use user routes
  app.use('/api/users', userRouter);

  app.get('/', async (req, res) => {
    try {
      const sessionId = req.cookies.userSessionToken;
      const sid = sessionId.split('.')[0].slice(2);

      const sessionModel = sessionStore.sessionModel;

      const session = await sessionModel.findOne({ where: { sid } });
      const dataObject = JSON.parse(session.data);

      if (!dataObject.adminUser) {
        return res.redirect('/admin/login');
      }

      res.send(dataObject.adminUser);

    } catch (err) {
      console.error('Error fetching sessions:', err);
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
