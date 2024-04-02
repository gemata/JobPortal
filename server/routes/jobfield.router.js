import express from "express";
import JobFieldController from "../controllers/jobfield.controller.js";

const JobFieldRouter = express.Router();

JobFieldRouter.post("/", JobFieldController.createJobField);

JobFieldRouter.get("/", JobFieldController.getJobFields);

JobFieldRouter.get("/:id", JobFieldController.getJobFieldById);

JobFieldRouter.put("/:id", JobFieldController.updateJobField);

JobFieldRouter.delete("/:id", JobFieldController.deleteJobField);

export default JobFieldRouter;
