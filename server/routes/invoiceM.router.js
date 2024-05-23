import express from "express";
import InvoiceMController from "../controllers/invoiceMSchema.controller.js";

const InvoiceMRouter = express.Router();

InvoiceMRouter.post("/", InvoiceMController.createInvoiceM);

InvoiceMRouter.get("/", InvoiceMController.getInvoiceMs);

InvoiceMRouter.get("/:id", InvoiceMController.getInvoiceMById);

InvoiceMRouter.put("/:id", InvoiceMController.updateInvoiceM);

InvoiceMRouter.delete("/:id", InvoiceMController.deleteInvoiceM);

export default InvoiceMRouter;