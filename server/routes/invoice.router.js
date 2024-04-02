import express from "express";
import InvoiceController from "../controllers/invoice.controller.js";

const InvoiceRouter = express.Router();

InvoiceRouter.post("/", InvoiceController.createInvoice);

InvoiceRouter.get("/", InvoiceController.getInvoices);

InvoiceRouter.get("/:id", InvoiceController.getInvoiceById);

InvoiceRouter.put("/:id", InvoiceController.updateInvoice);

InvoiceRouter.delete("/:id", InvoiceController.deleteInvoice);

export default InvoiceRouter;
