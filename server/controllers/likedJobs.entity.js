import LikedJobs from "../models/likedJobs.entity.js";

// Controller functions
const LikedJobsController = {
  // Create a new LikedJobs
  async createLikedJobs(req, res) {
    try {
      const newLikedJobs = await LikedJobs.create(req.body);
      return res.status(201).json(newLikedJobs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all LikedJobss
  async getLikedJobss(req, res) {
    try {
      const LikedJobss = await LikedJobs.findAll();
      return res.status(200).json(LikedJobss);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a LikedJobs by ID
  async getLikedJobsById(req, res) {
    const { id } = req.params;
    try {
      const LikedJobs = await LikedJobs.findByPk(id);
      if (!LikedJobs) {
        return res.status(404).json({ message: "LikedJobs not found" });
      }
      return res.status(200).json(LikedJobs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a LikedJobs
  async updateLikedJobs(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedLikedJobs] = await LikedJobs.update(body, {
        where: { id },
        returning: true, // Return the updated LikedJobs object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "LikedJobs not found" });
      }
      return res.status(200).json(updatedLikedJobs[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an LikedJobs
  async deleteLikedJobs(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await LikedJobs.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "LikedJobs not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

};

export default LikedJobsController;