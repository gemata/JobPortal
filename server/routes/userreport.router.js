
import express from "express";
import UserReportController from "../controllers/UserReport.controller.js";

const UserReportRouter = express.Router();

UserReportRouter.post("/", UserReportController.createUserReport);

UserReportRouter.get("/", UserReportController.getUserReports);

UserReportRouter.get("/:id", UserReportController.getUserReportById);

UserReportRouter.get("/user/:userId", UserReportController.getReportsByUserId);

UserReportRouter.put("/:id", UserReportController.updateUserReport);

UserReportRouter.delete("/:id", UserReportController.deleteUserReport);

export default UserReportRouter;