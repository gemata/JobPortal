import ApplicantList from "../models/applicantlist.entity.js";

// Controller functions
const ApplicantListController = {
  // Create a new ApplicantList
  async createApplicantList(req, res) {
    try {
      const newApplicantList = await ApplicantList.create(req.body);
      return res.status(201).json(newApplicantList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all ApplicantLists
  async getApplicantLists(req, res) {
    try {
      const ApplicantLists = await ApplicantList.findAll();
      return res.status(200).json(ApplicantLists);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a ApplicantList by ID
  async getApplicantListById(req, res) {
    const { id } = req.params;
    try {
      const ApplicantList = await ApplicantList.findByPk(id);
      if (!ApplicantList) {
        return res.status(404).json({ message: "ApplicantList not found" });
      }
      return res.status(200).json(ApplicantList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a ApplicantList
  async updateApplicantList(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedApplicantList] = await ApplicantList.update(body, {
        where: { id },
        returning: true, // Return the updated ApplicantList object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "ApplicantList not found" });
      }
      return res.status(200).json(updatedApplicantList[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an ApplicantList
  async deleteApplicantList(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await ApplicantList.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "ApplicantList not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default ApplicantListController;
