import Price from "../models/price.entity";

const PriceController = {
  async createPrice(req, res) {
    try {
      const newPrice = await Price.create(req.body);
      return res.status(201).json(newPrice);
    } catch (error) {
      return res.staus(500).json({ error: error.message });
    }
  },

  async getPrices(req, res) {
    try {
      const Prices = await Price.findAll();
      return res.status(201).json(Prices);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getPriceById(req, res) {
    const { id } = req.params;
    try {
      const Price = await Price.findByPk(id);
      if (!Price) {
        return res.status(404).json({ message: "Price not found" });
      }
      return res.status(200).json(Price);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updatePrice(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedPrice] = await Price.update(body, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Price not found" });
      }
      return res.status(200).json(updatedPrice[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deletePrice(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Price.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Price not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default PriceController;
