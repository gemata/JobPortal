import express from "express";
import EducationController from "../controllers/education.controller.js";

const EducationRouter = express.Router();

EducationRouter.post("/", EducationController.createEducation);

EducationRouter.get("/", EducationController.getEducations);

EducationRouter.get("/:id", EducationController.getEducationById);

EducationRouter.put("/:id", EducationController.updateEducation);

EducationRouter.delete("/:id", EducationController.deleteEducation);

EducationRouter.get("/user/:id", EducationController.getEducationsByUserId);

export default EducationRouter;
