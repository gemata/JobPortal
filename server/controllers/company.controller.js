// Import the Company model and Sequelize
import Company from "../models/Company.entity.js";

// Controller functions
const CompanyController = {
  // Create a new Company
  async createCompany(req, res) {
    try {
      const newCompany = await Company.create(req.body);
      return res.status(201).json(newCompany);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all Companies
  async getCompanies(req, res) {
    try {
      const Companies = await Company.findAll();
      return res.status(200).json(Companies);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a Company by ID
  async getCompanyById(req, res) {
    const { id } = req.params;
    try {
      const Company = await Company.findByPk(id);
      if (!Company) {
        return res.status(404).json({ message: "Company not found" });
      }
      return res.status(200).json(Company);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a Company
  async updateCompany(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedCompany] = await Company.update(body, {
        where: { id },
        returning: true, // Return the updated Company object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Company not found" });
      }
      return res.status(200).json(updatedCompany[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an Company
  async deleteCompany(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Company.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Company not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default CompanyController;
