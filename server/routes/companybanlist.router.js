import express from "express";
import CompanyBanListController from "../controllers/CompanyBanList.controller.js";

const CompanyBanListRouter = express.Router();

CompanyBanListRouter.post("/", CompanyBanListController.createCompanyBanList);

CompanyBanListRouter.get("/", CompanyBanListController.getCompanyBanLists);

CompanyBanListRouter.get("/:id", CompanyBanListController.getCompanyBanListById);

CompanyBanListRouter.put("/:id", CompanyBanListController.updateCompanyBanList);

CompanyBanListRouter.delete("/:id", CompanyBanListController.deleteCompanyBanList);

export default CompanyBanListRouter;