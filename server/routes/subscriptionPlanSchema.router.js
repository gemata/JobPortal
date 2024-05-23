import express from "express";
import SubscriptionPlanController from "../controllers/subscriptionPlanSchema.controller.js";

const SubscriptionPlanRouter = express.Router();

SubscriptionPlanRouter.post("/", SubscriptionPlanController.createSubscriptionPlan);

SubscriptionPlanRouter.get("/", SubscriptionPlanController.getSubscriptionPlans);

SubscriptionPlanRouter.get("/:id", SubscriptionPlanController.getSubscriptionPlanById);

SubscriptionPlanRouter.put("/:id", SubscriptionPlanController.updateSubscriptionPlan);

SubscriptionPlanRouter.delete("/:id", SubscriptionPlanController.deleteSubscriptionPlan);

export default SubscriptionPlanRouter;