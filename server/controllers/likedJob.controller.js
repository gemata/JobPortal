import LikedJob from "../models/likedJob.entity.js";

// Controller functions
const LikedJobController = {
  // Create a new LikedJob
  async createLikedJob(req, res) {
    try {
      const newLikedJob = await LikedJob.create(req.body);
      return res.status(201).json(newLikedJob);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all LikedJobs
  async getLikedJobs(req, res) {
    try {
      const LikedJobs = await LikedJob.findAll();
      return res.status(200).json(LikedJobs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a LikedJob by ID
  async getLikedJobById(req, res) {
    const { id } = req.params;
    try {
      const LikedJobRecord = await LikedJob.findByPk(id);
      if (!LikedJobRecord) {
        return res.status(404).json({ message: "LikedJob not found" });
      }
      return res.status(200).json(LikedJobRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a LikedJob
  async updateLikedJob(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedLikedJob] = await LikedJob.update(body, {
        where: { id },
        returning: true, // Return the updated LikedJob object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "LikedJob not found" });
      }
      return res.status(200).json(updatedLikedJob[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an LikedJob
  async deleteLikedJob(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await LikedJob.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "LikedJob not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

};

export default LikedJobController;