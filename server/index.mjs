import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';
import sequelize from './config/sequelize.mjs';
import mongooseConnection from './config/mongoose.js';
import cors from 'cors';
import * as AdminJSSequelize from '@adminjs/sequelize';
import * as AdminJSMongoose from '@adminjs/mongoose'
import dbContext from './models/dbContext.js';
import argon2 from 'argon2';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import passwordsFeature from '@adminjs/passwords';
import importExportFeature from '@adminjs/import-export';
import { componentLoader, Components } from './componentLoader.js';
import connectSessionStore from "connect-session-sequelize";
import { Store as SessionStore } from 'express-session';
import cookieParser from 'cookie-parser';
import { dark, light, noSidebar } from '@adminjs/themes'
import { DefaultAuthProvider } from 'adminjs';
import mailer from 'express-mailer';
import dotenv from "dotenv";

import User from './models/user.entity.js';
import Job from './models/job.entity.js';
import Post from './models/post.entity.js';
import Resume from './models/resume.entity.js';
import Category from './models/category.entity.js';
import userRouter from './routes/user.router.js';
import ChatLog from './models/chatLog.js';
import WorkExperience from './models/workexperience.entity.js';
import WorkExperienceRouter from './routes/workexperience.router.js';


AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: '../.env' });
console.log("Loaded MongoDB URI:", process.env.MONGODB_URI);

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async ({ email, password }, ctx) => {
  try {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      return DEFAULT_ADMIN;
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const passwordMatch = await argon2.verify(user.password, password);

    if (!passwordMatch) {
      return null;
    }

    if (user.role === "User" || user.role === "Business") {
      ctx.res.redirect('http://localhost:3000/');
    }

    return user;
  } catch (error) {
    console.error('Error authenticating user:', error);
    return null;
  }
}

const start = async () => {
  const app = express();

  app.use(cookieParser());

  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));

  mailer.extend(app, {
    from: 'jobhorizonsite@gmail.com',
    host: 'smtp.gmail.com',
    secureConnection: true,
    port: 465,
    transportMethod: 'SMTP',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD
    }
  });

  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

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

  const dashboardHandler = async () => {
    return { message: 'Data from handler' }
  }

  const admin = new AdminJS({
    defaultTheme: light.id,
    availableThemes: [dark, light],
    dashboard: {
      component: Components.Dashboard,
      handler: dashboardHandler,
    },
    componentLoader,
    resources: [
      //MySQL DB Models
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
                { value: 'Company', label: 'Company' },
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
        resource: WorkExperience,
        options:
          { parent: "mySQL", listProperties: ['id','UserId'] },
        features: [importExportFeature({ componentLoader })]
      },
      
      //MongoDB Models
      //Default id is "_id"
      {
        resource: Category,
        options:
          { parent: "mongoDB", listProperties: ['_id', 'title', 'createdAt', 'updatedAt'], editProperties: ['title'] },
        features: [importExportFeature({ componentLoader })]
      },
      {
        resource: ChatLog,
        options:
          { parent: "mongoDB", listProperties: ['_id', 'sender', 'receiver', 'createdAt'], editProperties: ['sender', 'receiver', 'message'] },
        features: [importExportFeature({ componentLoader })]
      }
    ],
    rootPath: '/admin' // Specify the root path for AdminJS
  });

  const authProvider = new DefaultAuthProvider({
    componentLoader,
    authenticate,
  });

  const SequelizeStore = connectSessionStore(SessionStore);
  const sessionStore = new SequelizeStore({ db: sequelize, expiration: 3600 });

  const getSessionData = async (req, res) => {
    try {
      const sessionId = req.cookies.userSessionToken;

      if (!sessionId) {
        return null;
      }

      const sid = sessionId.split('.')[0].slice(2);

      const sessionModel = sessionStore.sessionModel;

      const session = await sessionModel.findOne({ where: { sid } });

      if (!session) {
        return null;
      }

      return JSON.parse(session.data);

    } catch (error) {
      console.error('Error fetching session data:', error);
      return null;
    }
  };

  const isAdmin = async (req, res, next) => {
    try {
      const dataObject = await getSessionData(req, res);

      const { adminUser } = dataObject || {};

      if ((adminUser?.email === 'admin@example.com' || adminUser?.role === "Admin" || req.path === '/login' || req.path.startsWith('/frontend/assets/'))) {
        next();
      } else {
        return res.redirect('/admin/login');
        // return res.status(403).send('Forbidden');
      }

    } catch (error) {
      console.error('Error checking admin status:', error);
      res.status(500).send('Internal Server Error');
    }
  };

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      // authenticate,
      cookieName: 'userSessionToken',
      cookiePassword: 'sessionsecret',
      provider: authProvider
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
  app.use(admin.options.rootPath, isAdmin, adminRouter);

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Use user routes
  app.use('/api/users', userRouter);
  app.use('/api/workexperience', WorkExperienceRouter);


  app.get('/', async (req, res) => {
    try {
      const dataObject = await getSessionData(req, res);

      res.send(dataObject.adminUser);
    } catch (error) {
      console.error('Error fetching session data:', error);
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
