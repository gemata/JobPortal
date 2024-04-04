import Product from "../models/product.entity.js";

const ProductController = {
  async createProduct(req, res) {
    try {
      const newProduct = await Product.create(req.body);
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.staus(500).json({ error: error.message });
    }
  },

  async getProducts(req, res) {
    try {
      const Products = await Product.findAll();
      return res.status(201).json(Products);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getProductById(req, res) {
    const { id } = req.params;
    try {
      const Product = await Product.findByPk(id);
      if (!Product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json(Product);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateProduct(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedProduct] = await Product.update(body, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json(updatedProduct[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Product.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default ProductController;
