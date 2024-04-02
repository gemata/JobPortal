// Import the CompanyProfile model and Sequelize
import CompanyProfile from "../models/companyprofile.entity.js";

// Controller functions
const CompanyProfileController = {
  // Create a new CompanyProfile
  async createCompanyProfile(req, res) {
    try {
      const newCompanyProfile = await CompanyProfile.create(req.body);
      return res.status(201).json(newCompanyProfile);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all CompanyProfiles
  async getCompanyProfiles(req, res) {
    try {
      const CompanyProfiles = await CompanyProfile.findAll();
      return res.status(200).json(CompanyProfiles);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a CompanyProfile by ID
  async getCompanyProfileById(req, res) {
    const { id } = req.params;
    try {
      const CompanyProfile = await CompanyProfile.findByPk(id);
      if (!CompanyProfile) {
        return res.status(404).json({ message: "CompanyProfile not found" });
      }
      return res.status(200).json(CompanyProfile);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a CompanyProfile
  async updateCompanyProfile(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedCompanyProfile] =
        await CompanyProfile.update(body, {
          where: { id },
          returning: true, // Return the updated CompanyProfile object
        });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "CompanyProfile not found" });
      }
      return res.status(200).json(updatedCompanyProfile[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an CompanyProfile
  async deleteCompanyProfile(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await CompanyProfile.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "CompanyProfile not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default CompanyProfileController;
