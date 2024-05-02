import express from "express";
import JobPostReportController from "../controllers/JobPostReport.controller.js";

const JobPostReportRouter = express.Router();

JobPostReportRouter.post("/", JobPostReportController.createJobPostReport);

JobPostReportRouter.get("/", JobPostReportController.getJobPostReports);

JobPostReportRouter.get("/:id", JobPostReportController.getJobPostReportById);

JobPostReportRouter.get("/jobpost/:jobPostId", JobPostReportController.getReportsByJobPostId);

JobPostReportRouter.put("/:id", JobPostReportController.updateJobPostReport);

JobPostReportRouter.delete("/:id", JobPostReportController.deleteJobPostReport);

export default JobPostReportRouter;