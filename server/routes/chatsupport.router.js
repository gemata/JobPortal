import express from "express";
import ChatSupportController from "../controllers/chatsupport.controller.js";

const ChatSupportRouter = express.Router();

ChatSupportRouter.post("/", ChatSupportController.createChatSupport);

ChatSupportRouter.get("/", ChatSupportController.getChatSupports);

ChatSupportRouter.get("/:id", ChatSupportController.getChatSupportById);

ChatSupportRouter.put("/:id", ChatSupportController.updateChatSupport);

ChatSupportRouter.delete("/:id", ChatSupportController.deleteChatSupport);

export default ChatSupportRouter;
