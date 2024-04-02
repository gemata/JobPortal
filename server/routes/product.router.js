import express from "express";
import ProductController from "../controllers/product.controller.js";

const ProductRouter = express.Router();

ProductRouter.post("/", ProductController.createProduct);

ProductRouter.get("/", ProductController.getProducts);

ProductRouter.get("/:id", ProductController.getProductById);

ProductRouter.put("/:id", ProductController.updateProduct);

ProductRouter.delete("/:id", ProductController.deleteProduct);

export default ProductRouter;
