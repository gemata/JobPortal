import JobPostReport from "../models/JobPostReport.entity.js";

// Controller functions
const JobPostReportController = {
  // Create a new JobPostReport
  async createJobPostReport(req, res) {
    try {
      const newJobPostReport = await JobPostReport.create(req.body);
      return res.status(201).json(newJobPostReport);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all JobPostReports
  async getJobPostReports(req, res) {
    try {
      const JobPostReports = await JobPostReport.findAll();
      return res.status(200).json(JobPostReports);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a JobPostReport by ID
  async getJobPostReportById(req, res) {
    const { id } = req.params;
    try {
      const JobPostReportRecord = await JobPostReport.findByPk(id);
      if (!JobPostReportRecord) {
        return res.status(404).json({ message: "JobPostReportRecord not found" });
      }
      return res.status(200).json(JobPostReportRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all reports with a specific Job Post ID
  async getReportsByJobPostId(req, res) {
    const { jobPostId } = req.params;
    try {
      const JobPostReports = await JobPostReport.findAll({
        where: { JobPost: jobPostId },
      });
      return res.status(200).json(JobPostReports);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


  // Update a JobPostReport
  async updateJobPostReport(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedJobPostReport] = await JobPostReport.update(body, {
        where: { id },
        returning: true, // Return the updated JobPostReport object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "JobPostReport not found" });
      }
      return res.status(200).json(updatedJobPostReport[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an JobPostReport
  async deleteJobPostReport(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await JobPostReport.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "JobPostReport not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default JobPostReportController;
