import AppliedJob from "../models/appliedJob.entity.js";

// Controller functions
const AppliedJobController = {
  // Create a new AppliedJob
  async createAppliedJob(req, res) {
    try {
      const newAppliedJob = await AppliedJob.create(req.body);
      return res.status(201).json(newAppliedJob);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all AppliedJobs
  async getAppliedJobs(req, res) {
    try {
      const AppliedJobs = await AppliedJob.findAll();
      return res.status(200).json(AppliedJobs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a AppliedJob by ID
  async getAppliedJobById(req, res) {
    const { id } = req.params;
    try {
      const AppliedJobRecord = await AppliedJob.findByPk(id);
      if (!AppliedJobRecord) {
        return res.status(404).json({ message: "AppliedJobRecord not found" });
      }
      return res.status(200).json(AppliedJobRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a AppliedJob
  async updateAppliedJob(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedAppliedJob] = await AppliedJob.update(body, {
        where: { id },
        returning: true, // Return the updated AppliedJob object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "AppliedJob not found" });
      }
      return res.status(200).json(updatedAppliedJob[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an AppliedJob
  async deleteAppliedJob(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await AppliedJob.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "AppliedJob not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

};

export default AppliedJobController;