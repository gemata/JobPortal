import express from "express";
import SubscriptionController from "../controllers/subscription.controller.js";

const SubscriptionRouter = express.Router();

SubscriptionRouter.post("/", SubscriptionController.createSubscription);

SubscriptionRouter.get("/", SubscriptionController.getSubscriptions);

SubscriptionRouter.get("/:id", SubscriptionController.getSubscriptionById);

SubscriptionRouter.put("/:id", SubscriptionController.updateSubscription);

SubscriptionRouter.delete("/:id", SubscriptionController.deleteSubscription);

export default SubscriptionRouter;
