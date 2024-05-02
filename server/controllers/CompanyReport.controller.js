import CompanyReport from "../models/CompanyReport.entity.js";

// Controller functions
const CompanyReportController = {
  // Create a new CompanyReport
  async createCompanyReport(req, res) {
    try {
      const newCompanyReport = await CompanyReport.create(req.body);
      return res.status(201).json(newCompanyReport);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all CompanyReports
  async getCompanyReports(req, res) {
    try {
      const CompanyReports = await CompanyReport.findAll();
      return res.status(200).json(CompanyReports);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a CompanyReport by ID
  async getCompanyReportById(req, res) {
    const { id } = req.params;
    try {
      const CompanyReportRecord = await CompanyReport.findByPk(id);
      if (!CompanyReportRecord) {
        return res.status(404).json({ message: "CompanyReportRecord not found" });
      }
      return res.status(200).json(CompanyReportRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all reports with a specific company ID
  async getReportsByCompanyId(req, res) {
    const { companyId } = req.params;
    try {
      const companyReports = await CompanyReport.findAll({
        where: { Company: companyId },
      });
      return res.status(200).json(companyReports);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


  // Update a CompanyReport
  async updateCompanyReport(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedCompanyReport] = await CompanyReport.update(body, {
        where: { id },
        returning: true, // Return the updated CompanyReport object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "CompanyReport not found" });
      }
      return res.status(200).json(updatedCompanyReport[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an CompanyReport
  async deleteCompanyReport(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await CompanyReport.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "CompanyReport not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default CompanyReportController;
