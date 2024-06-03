import Invoice from "../models/invoice.entity.js";

const InvoiceController = {
  async createInvoice(req, res) {
    try {
      const newInvoice = await Invoice.create(req.body);
      return res.status(201).json(newInvoice);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getInvoices(req, res) {
    try {
      const Invoices = await Invoice.findAll();
      return res.status(201).json(Invoices);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getInvoiceById(req, res) {
    const { id } = req.params;
    try {
      const InvoiceRecord = await Invoice.findByPk(id);
      if (!InvoiceRecord) {
        return res.status(404).json({ message: "Invoice not found" });
      }
      return res.status(200).json(InvoiceRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateInvoice(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedInvoice] = await Invoice.update(body, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Invoice not found" });
      }
      return res.status(200).json(updatedInvoice[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteInvoice(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Invoice.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Invoice not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default InvoiceController;
