import InvoiceM from "../models/invoiceMSchema.js";

const InvoiceMController = {
  async createInvoiceM(req, res) {
    try {
      const newInvoiceM = await InvoiceM.create(req.body);
      return res.status(201).json(newInvoiceM);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getInvoiceMs(req, res) {
    try {
      const invoiceMs = await InvoiceM.find();
      return res.status(200).json(invoiceMs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getInvoiceMById(req, res) {
    const { id } = req.params;
    try {
      const invoiceMRecord = await InvoiceM.findById(id);
      if (!invoiceMRecord) {
        return res.status(404).json({ message: "InvoiceM not found" });
      }
      return res.status(200).json(invoiceMRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getInvoiceMByEmail(req, res) {
    const { email } = req.params;
    try {
      const invoiceMRecord = await InvoiceM.findOne({ email: email });
      if (!invoiceMRecord) {
        return res.status(404).json({ message: "InvoiceM not found" });
      }
      return res.status(200).json(invoiceMRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateInvoiceM(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const updatedInvoiceM = await InvoiceM.findByIdAndUpdate(id, body, { new: true });
      if (!updatedInvoiceM) {
        return res.status(404).json({ message: "InvoiceM not found" });
      }
      return res.status(200).json(updatedInvoiceM);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteInvoiceM(req, res) {
    const { id } = req.params;
    try {
      const deletedInvoiceM = await InvoiceM.findByIdAndDelete(id);
      if (!deletedInvoiceM) {
        return res.status(404).json({ message: "InvoiceM not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default InvoiceMController;
