import SavedJob from "../models/savedJob.entity.js";
import JobPost from "../models/JobPost.entity.js";

// Controller functions
const SavedJobController = {
  // Create a new SavedJob
  async createSavedJob(req, res) {
    try {
      const newSavedJob = await SavedJob.create(req.body);

      // Increment nrApplicants for the related JobPost
      const jobPost = await JobPost.findByPk(req.body.JobPostID);
      if (jobPost) {
        jobPost.likes += 1;
        await jobPost.save();
      }
      return res.status(201).json(newSavedJob);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all SavedJobs
  async getSavedJobs(req, res) {
    try {
      const SavedJobs = await SavedJob.findAll();
      return res.status(200).json(SavedJobs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a SavedJob by ID
  async getSavedJobById(req, res) {
    const { id } = req.params;
    try {
      const SavedJobRecord = await SavedJob.findByPk(id);
      if (!SavedJobRecord) {
        return res.status(404).json({ message: "SavedJob not found" });
      }
      return res.status(200).json(SavedJobRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all SavedJobs by user ID
  async getSavedJobsByUserId(req, res) {
    const { UserId } = req.params;
    try {
      const SavedJobs = await SavedJob.findAll({ where: { UserId } });
      if (!SavedJobs.length) {
        return res.status(404).json({ message: "No liked jobs found for this user" });
      }
      return res.status(200).json(SavedJobs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a SavedJob
  async updateSavedJob(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedSavedJob] = await SavedJob.update(body, {
        where: { id },
        returning: true, // Return the updated SavedJob object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "SavedJob not found" });
      }
      return res.status(200).json(updatedSavedJob[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an SavedJob
  async deleteSavedJob(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await SavedJob.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "SavedJob not found" });
      }
      const jobPost = await JobPost.findByPk(req.body.JobPostID);
      if (jobPost) {
        jobPost.likes -= 1;
        await jobPost.save();
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

};

export default SavedJobController;