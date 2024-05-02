
import express from "express";
import CompanyReportController from "../controllers/CompanyReport.controller.js";

const CompanyReportRouter = express.Router();

CompanyReportRouter.post("/", CompanyReportController.createCompanyReport);

CompanyReportRouter.get("/", CompanyReportController.getCompanyReports);

CompanyReportRouter.get("/:id", CompanyReportController.getCompanyReportById);

CompanyReportRouter.get("/company/:companyId", CompanyReportController.getReportsByCompanyId);

CompanyReportRouter.put("/:id", CompanyReportController.updateCompanyReport);

CompanyReportRouter.delete("/:id", CompanyReportController.deleteCompanyReport);

export default CompanyReportRouter;