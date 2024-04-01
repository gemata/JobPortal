// Import the CompanyLogo model and Sequelize
import CompanyLogo from "../models/CompanyLogo.entity.js";

// Controller functions
const CompanyLogoController = {
  // Create a new CompanyLogo
  async createCompanyLogo(req, res) {
    try {
      const newCompanyLogo = await CompanyLogo.create(req.body);
      return res.status(201).json(newCompanyLogo);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all CompanyLogos
  async getCompanyLogos(req, res) {
    try {
      const CompanyLogos = await CompanyLogo.findAll();
      return res.status(200).json(CompanyLogos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a CompanyLogo by ID
  async getCompanyLogoById(req, res) {
    const { id } = req.params;
    try {
      const CompanyLogo = await CompanyLogo.findByPk(id);
      if (!CompanyLogo) {
        return res.status(404).json({ message: "CompanyLogo not found" });
      }
      return res.status(200).json(CompanyLogo);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a CompanyLogo
  async updateCompanyLogo(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedCompanyLogo] = await CompanyLogo.update(body, {
        where: { id },
        returning: true, // Return the updated CompanyLogo object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "CompanyLogo not found" });
      }
      return res.status(200).json(updatedCompanyLogo[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an CompanyLogo
  async deleteCompanyLogo(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await CompanyLogo.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "CompanyLogo not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default CompanyLogoController;
