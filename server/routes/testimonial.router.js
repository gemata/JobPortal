import express from "express";
import TestimonialController from "../controllers/testimonial.controller.js";

const TestimonialRouter = express.Router();

TestimonialRouter.post("/", TestimonialController.createTestimonial);

TestimonialRouter.get("/", TestimonialController.getTestimonials);

TestimonialRouter.get("/:id", TestimonialController.getTestimonialById);

TestimonialRouter.put("/:id", TestimonialController.updateTestimonial);

TestimonialRouter.delete("/:id", TestimonialController.deleteTestimonial);

TestimonialRouter.get("/user/:id", TestimonialController.getTestimonialsByUserId);

export default TestimonialRouter;
