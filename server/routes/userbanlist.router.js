import express from "express";
import UserBanListController from "../controllers/UserBanList.controller.js";

const UserBanListRouter = express.Router();

UserBanListRouter.post("/", UserBanListController.createUserBanList);

UserBanListRouter.get("/", UserBanListController.getUserBanLists);

UserBanListRouter.get("/:id", UserBanListController.getUserBanListById);

UserBanListRouter.put("/:id", UserBanListController.updateUserBanList);

UserBanListRouter.delete("/:id", UserBanListController.deleteUserBanList);

export default UserBanListRouter;