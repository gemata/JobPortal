import express from "express";
import PriceController from "../controllers/price.controller.js";

const PriceRouter = express.Router();

PriceRouter.post("/", PriceController.createPrice);

PriceRouter.get("/", PriceController.getPrices);

PriceRouter.get("/:id", PriceController.getPriceById);

PriceRouter.put("/:id", PriceController.updatePrice);

PriceRouter.delete("/:id", PriceController.deletePrice);

export default PriceRouter;
