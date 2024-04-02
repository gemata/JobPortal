import express from "express";
import JobPositionController from "../controllers/jobposition.controller.js";

const JobPositionRouter = express.Router();

JobPositionRouter.post("/", JobPositionController.createJobPosition);

JobPositionRouter.get("/", JobPositionController.getJobPositions);

JobPositionRouter.get("/:id", JobPositionController.getJobPositionById);

JobPositionRouter.put("/:id", JobPositionController.updateJobPosition);

JobPositionRouter.delete("/:id", JobPositionController.deleteJobPosition);

export default JobPositionRouter;
