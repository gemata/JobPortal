import CompanyBanList from "../models/CompanyBanList.entity.js";

// Controller functions
const CompanyBanListController = {
  // Create a new CompanyBanList
  async createCompanyBanList(req, res) {
    try {
      const newCompanyBanList = await CompanyBanList.create(req.body);
      return res.status(201).json(newCompanyBanList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all CompanyBanLists
  async getCompanyBanLists(req, res) {
    try {
      const CompanyBanLists = await CompanyBanList.findAll();
      return res.status(200).json(CompanyBanLists);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a CompanyBanList by ID
  async getCompanyBanListById(req, res) {
    const { id } = req.params;
    try {
      const CompanyBanListRecord = await CompanyBanList.findByPk(id);
      if (!CompanyBanListRecord) {
        return res.status(404).json({ message: "CompanyBanList not found" });
      }
      return res.status(200).json(CompanyBanListRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a CompanyBanList
  async updateCompanyBanList(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedCompanyBanList] = await CompanyBanList.update(body, {
        where: { id },
        returning: true, // Return the updated CompanyBanList object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "CompanyBanList not found" });
      }
      return res.status(200).json(updatedCompanyBanList[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an CompanyBanList
  async deleteCompanyBanList(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await CompanyBanList.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "CompanyBanList not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default CompanyBanListController;
