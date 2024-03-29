import AppliedJobs from "../models/appliedJobs.entity.js";

// Controller functions
const AppliedJobsController = {
  // Create a new AppliedJobs
  async createAppliedJobs(req, res) {
    try {
      const newAppliedJobs = await AppliedJobs.create(req.body);
      return res.status(201).json(newAppliedJobs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all AppliedJobss
  async getAppliedJobss(req, res) {
    try {
      const AppliedJobss = await AppliedJobs.findAll();
      return res.status(200).json(AppliedJobss);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a AppliedJobs by ID
  async getAppliedJobsById(req, res) {
    const { id } = req.params;
    try {
      const AppliedJobs = await AppliedJobs.findByPk(id);
      if (!AppliedJobs) {
        return res.status(404).json({ message: "AppliedJobs not found" });
      }
      return res.status(200).json(AppliedJobs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a AppliedJobs
  async updateAppliedJobs(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedAppliedJobs] = await AppliedJobs.update(body, {
        where: { id },
        returning: true, // Return the updated AppliedJobs object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "AppliedJobs not found" });
      }
      return res.status(200).json(updatedAppliedJobs[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an AppliedJobs
  async deleteAppliedJobs(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await AppliedJobs.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "AppliedJobs not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

};

export default AppliedJobsController;