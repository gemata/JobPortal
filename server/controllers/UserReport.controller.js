import UserReport from "../models/UserReport.entity.js";

// Controller functions
const UserReportController = {
  // Create a new UserReport
  async createUserReport(req, res) {
    try {
      const newUserReport = await UserReport.create(req.body);
      return res.status(201).json(newUserReport);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all UserReports
  async getUserReports(req, res) {
    try {
      const UserReports = await UserReport.findAll();
      return res.status(200).json(UserReports);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a UserReport by ID
  async getUserReportById(req, res) {
    const { id } = req.params;
    try {
      const UserReportRecord = await UserReport.findByPk(id);
      if (!UserReportRecord) {
        return res.status(404).json({ message: "UserReportRecord not found" });
      }
      return res.status(200).json(UserReportRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all reports with a specific User ID
  async getReportsByUserId(req, res) {
    const { userId } = req.params;
    try {
      const UserReports = await UserReport.findAll({
        where: { User: userId },
      });
      return res.status(200).json(UserReports);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


  // Update a UserReport
  async updateUserReport(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedUserReport] = await UserReport.update(body, {
        where: { id },
        returning: true, // Return the updated UserReport object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "UserReport not found" });
      }
      return res.status(200).json(updatedUserReport[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an UserReport
  async deleteUserReport(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await UserReport.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "UserReport not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default UserReportController;
