import express from "express";
import CompanyProfileController from "../controllers/companyprofile.controller.js";

const CompanyProfileRouter = express.Router();

CompanyProfileRouter.post("/", CompanyProfileController.createCompanyProfile);

CompanyProfileRouter.get("/", CompanyProfileController.getCompanyProfiles);

CompanyProfileRouter.get(
  "/:id",
  CompanyProfileController.getCompanyProfileById
);

CompanyProfileRouter.put("/:id", CompanyProfileController.updateCompanyProfile);

CompanyProfileRouter.delete(
  "/:id",
  CompanyProfileController.deleteCompanyProfile
);

export default CompanyProfileRouter;
