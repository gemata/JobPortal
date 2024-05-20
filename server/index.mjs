import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
import sequelize from "./config/sequelize.mjs";
import mongooseConnection from "./config/mongoose.js";
import cors from "cors";
import * as AdminJSSequelize from "@adminjs/sequelize";
import * as AdminJSMongoose from "@adminjs/mongoose";
import dbContext from "./config/dbContext.js";
import argon2 from "argon2";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import passwordsFeature from "@adminjs/passwords";
import importExportFeature from "@adminjs/import-export";
import { componentLoader, Components } from "./componentLoader.js";
import connectSessionStore from "connect-session-sequelize";
import { Store as SessionStore } from "express-session";
import cookieParser from "cookie-parser";
import { dark, light, noSidebar } from "@adminjs/themes";
import { DefaultAuthProvider } from "adminjs";
import mailer from "express-mailer";
import dotenv from "dotenv";
import uploadFeature from "@adminjs/upload";
import fs from "fs";
import { Icon } from "@adminjs/design-system";
import dashboardHandler from "./config/dashboardHandler.js";

// Import models and routes from config files in one line each
import * as Models from "./config/importsForModels.js";
import * as Routes from "./config/importsForRoutes.js";

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
dotenv.config({ path: "../.env" });
console.log("Loaded MongoDB URI:", process.env.MONGODB_URI);

const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password",
};

const authenticate = async ({ email, password }, ctx) => {
  try {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      return DEFAULT_ADMIN;
    }

    const user = await Models.User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const passwordMatch = await argon2.verify(user.password, password);

    if (!passwordMatch) {
      return null;
    }

    if (user.role === "User" || user.role === "Business") {
      ctx.res.redirect("http://localhost:3000/");
    }

    return user;
  } catch (error) {
    console.error("Error authenticating user:", error);
    return null;
  }
};

const userUploadPath = (record, filename) => {
  return `${record.params.UserId}/${filename}`;
};

const companyUploadPath = (record, filename) => {
  return `${record.params.CompanyID}/${filename}`;
};

const unlinkFileFromStorage = async (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
      console.log(`File unlinked: ${filePath}`);

      const directoryPath = path.dirname(filePath);

      const filesInDirectory = await fs.promises.readdir(directoryPath);
      if (filesInDirectory.length === 0) {
        await fs.promises.rmdir(directoryPath);
        console.log(`Directory deleted: ${directoryPath}`);
      }
    } else {
      console.log(`File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error unlinking file: ${filePath}`, error);
    throw error;
  }
};

const cleanUpFolder = async (directoryPath) => {
  try {
    const filesInDirectory = await fs.promises.readdir(directoryPath);

    if (filesInDirectory.length === 0) {
      await fs.promises.rmdir(directoryPath);
      console.log(`Directory deleted: ${directoryPath}`);
    }
  } catch (err) {
    console.error(`Error cleaning up folder ${directoryPath}: ${err}`);
  }
};

const start = async () => {
  const app = express();

  app.use(cookieParser());
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(express.static(path.join(__dirname, "/public")));

  mailer.extend(app, {
    from: "jobhorizonsite@gmail.com",
    host: "smtp.gmail.com",
    secureConnection: true,
    port: 465,
    transportMethod: "SMTP",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  app.set("views", __dirname + "/views");
  app.set("view engine", "ejs");

  try {
    await sequelize.authenticate();
    console.log("Sequelize connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the sequelize database:", error);
    return;
  }

  (async () => {
    try {
      await dbContext();
      console.log("dbContext has been set up successfully.");
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
    assets: {
      styles: ["/admin.css"],
    },
    dashboard: {
      component: Components.Dashboard,
      handler: dashboardHandler,
    },
    componentLoader,
    resources: [
      //MySQL DB Models
      {
        resource: Models.User,
        options: {
          parent: {
            name: "User Models",
            icon: "User",
          },
          listProperties: ["id", "email", "firstName", "lastName", "role"],
          showProperties: [
            "id",
            "email",
            "firstName",
            "lastName",
            "createdAt",
            "updatedAt",
            "role",
          ],
          createProperties: [
            "email",
            "firstName",
            "lastName",
            "newPassword",
            "role",
            "image",
            "resume",
          ],
          editProperties: [
            "email",
            "firstName",
            "lastName",
            "newPassword",
            "role",
            "image",
            "resume",
          ],
          properties: {
            password: { isVisible: false },
            role: {
              availableValues: [
                { value: "User", label: "User" },
                { value: "Admin", label: "Admin" },
                { value: "Editor", label: "Editor" },
              ],
            },
            id: {
              components: {
                show: Components.LinkComponent, // this is our custom component
              },
            },
          },
          actions: {
            new: {
              after: async (response) => {
                const { record } = response;

                if (record.params?.imageS3Key) {
                  const userImage = await Models.UserImage.create({
                    s3Key: record.params.imageS3Key,
                    bucket: record.params.imageBucket,
                    mime: record.params.imageMime,
                    UserId: record.params.id,
                  });
                }

                if (record.params?.resumeS3Key) {
                  const resume = await Models.Resume.create({
                    s3Key: record.params.resumeS3Key,
                    bucket: record.params.resumeBucket,
                    mime: record.params.resumeMime,
                    UserId: record.params.id,
                  });
                }

                return response;
              },
            },
            edit: {
              after: async (response) => {
                const { record } = response;

                if (record.params?.imageS3Key) {
                  let userImage = await Models.UserImage.findOne({
                    where: { UserId: record.params.id },
                  });

                  if (userImage) {
                    const filePath = `${userImage.bucket}/${userImage.s3Key}`;
                    await unlinkFileFromStorage(filePath);

                    userImage.set({
                      s3Key: record.params.imageS3Key,
                      bucket: record.params.imageBucket,
                      mime: record.params.imageMime,
                      UserId: record.params.id,
                    });
                    await userImage.save();
                  } else {
                    userImage = await Models.UserImage.create({
                      s3Key: record.params.imageS3Key,
                      bucket: record.params.imageBucket,
                      mime: record.params.imageMime,
                      UserId: record.params.id,
                    });
                  }
                }

                if (record.params?.resumeS3Key) {
                  let resume = await Models.Resume.findOne({
                    where: { UserId: record.params.id },
                  });

                  if (resume) {
                    const filePath = `${resume.bucket}/${resume.s3Key}`;
                    await unlinkFileFromStorage(filePath);

                    resume.set({
                      s3Key: record.params.resumeS3Key,
                      bucket: record.params.resumeBucket,
                      mime: record.params.resumeMime,
                      UserId: record.params.id,
                    });
                    await resume.save();
                  } else {
                    resume = await Models.Resume.create({
                      s3Key: record.params.resumeS3Key,
                      bucket: record.params.resumeBucket,
                      mime: record.params.resumeMime,
                      UserId: record.params.id,
                    });
                  }
                }

                return response;
              },
            },
            delete: {
              after: async (originalResponse, request, context) => {
                try {
                  const resumesToDelete = await Models.Resume.findAll({
                    where: {
                      UserId: null,
                    },
                  });

                  const imagesToDelete = await Models.UserImage.findAll({
                    where: {
                      UserId: null,
                    },
                  });

                  await Promise.all(
                    resumesToDelete.map(async (resume) => {
                      const filePath = `${resume.bucket}/${resume.s3Key}`;
                      await unlinkFileFromStorage(filePath);
                    })
                  );

                  await Promise.all(
                    imagesToDelete.map(async (image) => {
                      const filePath = `${image.bucket}/${image.s3Key}`;
                      await unlinkFileFromStorage(filePath);
                    })
                  );

                  await Models.Resume.destroy({
                    where: {
                      UserId: null,
                    },
                  });

                  console.log("Resumes unlinked from storage");

                  await Models.UserImage.destroy({
                    where: {
                      UserId: null,
                    },
                  });

                  console.log("User images unlinked from storage");

                  return originalResponse;
                } catch (error) {
                  console.error("Error unlinking associated resumes:", error);
                  throw new Error("Error unlinking associated resumes");
                }
              },
            },
            bulkDelete: {
              after: async (originalResponse, request, context) => {
                try {
                  const resumesToDelete = await Models.Resume.findAll({
                    where: {
                      UserId: null,
                    },
                  });

                  const imagesToDelete = await Models.UserImage.findAll({
                    where: {
                      UserId: null,
                    },
                  });

                  const resumeFilePaths = resumesToDelete.map(
                    (resume) => `${resume.bucket}/${resume.s3Key}`
                  );
                  const imageFilePaths = imagesToDelete.map(
                    (resume) => `${resume.bucket}/${resume.s3Key}`
                  );

                  await Promise.all(
                    resumeFilePaths.map(async (filePath) => {
                      await unlinkFileFromStorage(filePath);
                    })
                  );

                  await Promise.all(
                    imageFilePaths.map(async (filePath) => {
                      await unlinkFileFromStorage(filePath);
                    })
                  );

                  await Models.Resume.destroy({
                    where: {
                      UserId: null,
                    },
                  });

                  console.log("Resumes unlinked from storage");

                  await Models.UserImage.destroy({
                    where: {
                      UserId: null,
                    },
                  });

                  console.log("User images unlinked from storage");

                  return originalResponse;
                } catch (error) {
                  console.error("Error unlinking associated resumes:", error);
                  throw new Error("Error unlinking associated resumes");
                }
              },
            },
          },
        },
        features: [
          uploadFeature({
            componentLoader,
            provider: { local: { bucket: "public/profilePics" } },
            properties: {
              file: "image",
              key: "imageS3Key",
              bucket: "imageBucket",
              mimeType: "imageMime",
              filePath: `imageFilePath`,
              filesToDelete: `imageFilesToDelete`,
            },
            validation: {
              mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/svg+xml"],
            },
          }),
          uploadFeature({
            componentLoader,
            provider: { local: { bucket: "public/resumes" } },
            properties: {
              file: "resume",
              key: "resumeS3Key",
              bucket: "resumeBucket",
              mimeType: "resumeMime",
              filePath: `resumeFilePath`,
              filesToDelete: `resumeFilesToDelete`,
            },
            validation: {
              mimeTypes: [
                "application/msword",
                "application/pdf",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              ],
            },
          }),
          passwordsFeature({
            componentLoader,
            properties: {
              password: "newPassword",
              encryptedPassword: "password",
            },
            hash: argon2.hash,
          }),
          importExportFeature({ componentLoader }),
        ],
      },
      {
        resource: Models.Resume,
        options: {
          parent: "User Models",
          listProperties: ["id", "UserId", "resume"],
          editProperties: ["UserId", "resume"],
          showProperties: ["id", "UserId", "mime", "createdAt", "updatedAt"],
          properties: {
            resume: {
              components: {
                list: Components.RerouteLinks,
              },
            },
            id: {
              components: {
                show: Components.LinkComponent
              }
            }
          },
          actions: {
            delete: {
              after: async (originalResponse, request, context) => {
                try {
                  const { record } = originalResponse;

                  const folderPath = `${record?.params.bucket}/${record?.params.UserId}`;
                  await cleanUpFolder(folderPath);

                  return originalResponse;
                } catch (error) {
                  console.error("Error unlinking:", error);
                  throw new Error("Error unlinking");
                }
              },
            },
            bulkDelete: {
              after: async (originalResponse, request, context) => {
                try {
                  const { records } = originalResponse;

                  for (const record of records) {
                    const folderPath = `${record?.params.bucket}/${record?.params.UserId}`;
                    await cleanUpFolder(folderPath);
                  }

                  return originalResponse;
                } catch (error) {
                  console.error("Error unlinking:", error);
                  throw new Error("Error unlinking");
                }
              },
            },
          },
        },
        features: [
          uploadFeature({
            componentLoader,
            provider: { local: { bucket: "public/resumes" } },
            properties: {
              file: "resume",
              key: "s3Key",
              bucket: "bucket",
              mimeType: "mime",
            },
            uploadPath: userUploadPath,
            validation: {
              mimeTypes: [
                "application/msword",
                "application/pdf",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              ],
            },
          }),
          importExportFeature({ componentLoader }),
        ],
      },
      {
        resource: Models.UserImage,
        options: {
          parent: "User Models",
          listProperties: ["id", "UserId", "image"],
          editProperties: ["UserId", "image"],
          showProperties: ["id", "UserId", "mime", "createdAt", "updatedAt"],
          properties: {
            image: {
              components: {
                list: Components.RerouteLinks,
              },
            },
            id: {
              components: {
                show: Components.LinkComponent
              }
            }
          },
          actions: {
            delete: {
              after: async (originalResponse, request, context) => {
                try {
                  const { record } = originalResponse;

                  const folderPath = `${record?.params.bucket}/${record?.params.UserId}`;
                  await cleanUpFolder(folderPath);

                  return originalResponse;
                } catch (error) {
                  console.error("Error unlinking:", error);
                  throw new Error("Error unlinking");
                }
              },
            },
            bulkDelete: {
              after: async (originalResponse, request, context) => {
                try {
                  const { records } = originalResponse;

                  for (const record of records) {
                    const folderPath = `${record?.params.bucket}/${record?.params.UserId}`;
                    await cleanUpFolder(folderPath);
                  }

                  return originalResponse;
                } catch (error) {
                  console.error("Error unlinking:", error);
                  throw new Error("Error unlinking");
                }
              },
            },
          },
        },
        features: [
          uploadFeature({
            componentLoader,
            provider: { local: { bucket: "public/profilePics" } },
            properties: {
              file: "image",
              key: "s3Key",
              bucket: "bucket",
              mimeType: "mime",
            },
            uploadPath: userUploadPath,
            validation: {
              mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/svg+xml"],
            },
          }),
          importExportFeature({ componentLoader }),
        ],
      },
      {
        resource: Models.UserProfile,
        options: { parent: "User Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.WorkExperience,
        options: { parent: "User Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.Education,
        options: { parent: "User Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.ApplicantList,
        options: {
          parent: {
            name: "Job Models",
            icon: "Briefcase",
          },
        },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.AppliedJob,
        options: { parent: "User Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.Company,
        options: {
          parent: {
            name: "Company Models",
          },
          listProperties: [
            "ID",
            "Email",
            "CompanyName",
            "FreeJobPosted",
            "createdAt",
            "updatedAt",
          ],
          showProperties: [
            "ID",
            "Email",
            "CompanyName",
            "FreeJobPosted",
            "createdAt",
            "updatedAt",
          ],
          createProperties: [
            "Email",
            "CompanyName",
            "FreeJobPosted",
            "newPassword",
            "role",
            "image",
          ],
          editProperties: [
            "Email",
            "CompanyName",
            "FreeJobPosted",
            "newPassword",
            "role",
            "image",
          ],
          properties: {
            password: { isVisible: false },
            role: {
              availableValues: [{ value: "Company", label: "Company" }],
            },
            ID: {
              components: {
                show: Components.LinkComponent, // this is our custom component
              },
            },
          },
          actions: {
            new: {
              after: async (response) => {
                const { record } = response;

                if (record.params?.s3Key) {
                  const companyLogo = await Models.CompanyLogo.create({
                    s3Key: record.params.s3Key,
                    bucket: record.params.bucket,
                    mime: record.params.mime,
                    CompanyID: record.params.ID,
                  });
                }
                return response;
              },
            },
            edit: {
              after: async (response) => {
                const { record } = response;

                if (record.params?.s3Key) {
                  let companyLogo = await Models.CompanyLogo.findOne({
                    where: { CompanyID: record.params.ID },
                  });

                  if (companyLogo) {
                    const filePath = `${companyLogo.bucket}/${companyLogo.s3Key}`;
                    await unlinkFileFromStorage(filePath);

                    companyLogo.set({
                      s3Key: record.params.s3Key,
                      bucket: record.params.bucket,
                      mime: record.params.mime,
                      CompanyID: record.params.ID,
                    });
                    await companyLogo.save();
                  } else {
                    companyLogo = await Models.CompanyLogo.create({
                      s3Key: record.params.s3Key,
                      bucket: record.params.bucket,
                      mime: record.params.mime,
                      CompanyID: record.params.ID,
                    });
                  }
                }

                return response;
              },
            },
            delete: {
              after: async (originalResponse, request, context) => {
                try {
                  const imagesToDelete = await Models.CompanyLogo.findAll({
                    where: {
                      CompanyID: null,
                    },
                  });

                  await Promise.all(
                    imagesToDelete.map(async (image) => {
                      const filePath = `${image.bucket}/${image.s3Key}`;
                      await unlinkFileFromStorage(filePath);
                    })
                  );

                  await Models.CompanyLogo.destroy({
                    where: {
                      CompanyID: null,
                    },
                  });

                  console.log("Company logos unlinked from storage");

                  return originalResponse;
                } catch (error) {
                  console.error("Error unlinking associated logos:", error);
                  throw new Error("Error unlinking associated logos");
                }
              },
            },
            bulkDelete: {
              after: async (originalResponse, request, context) => {
                try {
                  const imagesToDelete = await Models.CompanyLogo.findAll({
                    where: {
                      CompanyID: null,
                    },
                  });

                  const imageFilePaths = imagesToDelete.map(
                    (resume) => `${resume.bucket}/${resume.s3Key}`
                  );

                  await Promise.all(
                    imageFilePaths.map(async (filePath) => {
                      await unlinkFileFromStorage(filePath);
                    })
                  );

                  await Models.CompanyLogo.destroy({
                    where: {
                      CompanyID: null,
                    },
                  });

                  console.log("Company logos unlinked from storage");

                  return originalResponse;
                } catch (error) {
                  console.error("Error unlinking associated logos:", error);
                  throw new Error("Error unlinking associated logos");
                }
              },
            },
          },
        },
        features: [
          passwordsFeature({
            componentLoader,
            properties: {
              password: "newPassword",
              encryptedPassword: "password",
            },
            hash: argon2.hash,
          }),
          uploadFeature({
            componentLoader,
            provider: { local: { bucket: "public/companyLogos" } },
            properties: {
              file: "image",
              key: "s3Key",
              bucket: "bucket",
              mimeType: "mime",
            },
            validation: {
              mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/svg+xml"],
            },
          }),
          importExportFeature({ componentLoader }),
        ],
      },
      {
        resource: Models.CompanyLogo,
        options: {
          parent: "Company Models",
          listProperties: ["id", "CompanyID", "image"],
          editProperties: ["CompanyID", "image"],
          showProperties: ["id", "CompanyID", "mime", "createdAt", "updatedAt"],
          properties: {
            image: {
              components: {
                list: Components.RerouteLinks,
              },
            },
            id: {
              components: {
                show: Components.LinkComponent
              }
            }
          },
          actions: {
            delete: {
              after: async (originalResponse, request, context) => {
                try {
                  const { record } = originalResponse;

                  const folderPath = `${record?.params.bucket}/${record?.params.CompanyID}`;
                  await cleanUpFolder(folderPath);

                  return originalResponse;
                } catch (error) {
                  console.error("Error unlinking:", error);
                  throw new Error("Error unlinking");
                }
              },
            },
            bulkDelete: {
              after: async (originalResponse, request, context) => {
                try {
                  const { records } = originalResponse;

                  for (const record of records) {
                    const folderPath = `${record?.params.bucket}/${record?.params.CompanyID}`;
                    await cleanUpFolder(folderPath);
                  }

                  return originalResponse;
                } catch (error) {
                  console.error("Error unlinking:", error);
                  throw new Error("Error unlinking");
                }
              },
            },
          },
        },
        features: [
          uploadFeature({
            componentLoader,
            provider: { local: { bucket: "public/companyLogos" } },
            properties: {
              file: "image",
              key: "s3Key",
              bucket: "bucket",
              mimeType: "mime",
            },
            uploadPath: companyUploadPath,
            validation: {
              mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/svg+xml"],
            },
          }),
          importExportFeature({ componentLoader }),
        ],
      },
      {
        resource: Models.CompanyProfile,
        options: { parent: "Company Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.InterviewList,
        options: { parent: "Job Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.Invoice,
        options: {
          parent: {
            name: "Payment Models",
            // icon: "DollarSign"
            icon: "ShoppingCart"
          },
        },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.JobField,
        options: { parent: "Job Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.JobPosition,
        options: { parent: "Job Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.JobPost,
        options: { parent: "Job Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.LikedJob,
        options: { parent: "User Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.Price,
        options: { parent: "Payment Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.Product,
        options: { parent: "Payment Models" },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.Subscription,
        options: { parent: "Payment Models" },
        features: [importExportFeature({ componentLoader })],
      },

      //MongoDB Models
      //Default id is "_id"
      {
        resource: Models.ChatLog,
        options: {
          parent: {
            name: "Non-relational Models",
            icon: "None",
          },
          listProperties: ["_id", "sender", "receiver", "createdAt"],
          editProperties: ["sender", "receiver", "message"],
        },
        features: [importExportFeature({ componentLoader })],
      },
      {
        resource: Models.PendingAccount,
        options: {
          parent: {
            name: "Non-relational Models",
          },
          listProperties: ["_id", "email", "confirmTokenExpire"],
          showProperties: ["_id", "email", "password", "confirmToken", "confirmTokenExpire"],
          editProperties: ["email", "password"],
        },
        features: [importExportFeature({ componentLoader })],
      },
    ],
    rootPath: "/admin", // Specify the root path for AdminJS
    branding: {
      companyName: 'JobHorizon',
      favicon: '/favicon.ico',
    }
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

      const sid = sessionId.split(".")[0].slice(2);

      const sessionModel = sessionStore.sessionModel;

      const session = await sessionModel.findOne({ where: { sid } });

      if (!session) {
        return null;
      }

      return JSON.parse(session.data);
    } catch (error) {
      console.error("Error fetching session data:", error);
      return null;
    }
  };

  const isAdmin = async (req, res, next) => {
    try {
      const dataObject = await getSessionData(req, res);

      const { adminUser } = dataObject || {};

      if (
        adminUser?.email === "admin@example.com" ||
        adminUser?.role === "Admin" ||
        req.path === "/login" ||
        req.path.startsWith("/frontend/assets/")
      ) {
        next();
      } else {
        return res.redirect("/admin/login");
      }
    } catch (error) {
      console.error("Error checking admin status:", error);
      res.status(500).send("Internal Server Error");
    }
  };

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      // authenticate,
      cookieName: "userSessionToken",
      cookiePassword: "sessionsecret",
      provider: authProvider,
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: "sessionsecret",
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
      name: "userSessionToken",
    }
  );
  app.use(admin.options.rootPath, isAdmin, adminRouter);

  // Middleware to parse JSON bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Use routes
  app.use("/api/applicantlists", Routes.ApplicantlistRouter);
  app.use("/api/appliedjobs", Routes.AppliedJobRouter);
  app.use("/api/companies", Routes.CompanyRouter);
  app.use("/api/companylogos", Routes.CompanyLogoRouter);
  app.use("/api/companyprofiles", Routes.CompanyProfileRouter);
  app.use("/api/educations", Routes.EducationRouter);
  app.use("/api/interviewlists", Routes.InterviewListRouter);
  app.use("/api/invoices", Routes.InvoiceRouter);
  app.use("/api/jobfields", Routes.JobFieldRouter);
  app.use("/api/jobpositions", Routes.JobPositionRouter);
  app.use("/api/jobposts", Routes.JobPostRouter);
  app.use("/api/likedjobs", Routes.LikedJobRouter);
  app.use("/api/prices", Routes.PriceRouter);
  app.use("/api/products", Routes.ProductRouter);
  app.use("/api/resumes", Routes.ResumeRouter);
  app.use("/api/subscriptions", Routes.SubscriptionRouter);
  app.use("/api/users", Routes.userRouter);
  app.use("/api/userimages", Routes.userImageRouter);
  app.use("/api/userprofiles", Routes.userProfileRouter);
  app.use("/api/workexperience", Routes.WorkExperienceRouter);
  app.use("/api/pendingAccounts", Routes.PendingAccountRouter);

  app.get("/", async (req, res) => {
    try {
      const dataObject = await getSessionData(req, res);

      res.send(dataObject?.adminUser);
    } catch (error) {
      console.error("Error fetching session data:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });

  if (process.env.NODE_ENV === "production") await admin.initialize();
  else admin.watch();
};

start();
