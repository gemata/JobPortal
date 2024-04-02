// Import the JobPost model and Sequelize
import JobPost from "../models/JobPost.entity.js";

// Controller functions
const JobPostController = {
  // Create a new JobPost
  async createJobPost(req, res) {
    try {
      const newJobPost = await JobPost.create(req.body);
      return res.status(201).json(newJobPost);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all JobPosts
  async getJobPosts(req, res) {
    try {
      const JobPosts = await JobPost.findAll();
      return res.status(200).json(JobPosts);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a JobPost by ID
  async getJobPostById(req, res) {
    const { id } = req.params;
    try {
      const JobPost = await JobPost.findByPk(id);
      if (!JobPost) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      return res.status(200).json(JobPost);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a JobPost
  async updateJobPost(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedJobPost] = await JobPost.update(body, {
        where: { id },
        returning: true, // Return the updated JobPost object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      return res.status(200).json(updatedJobPost[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an JobPost
  async deleteJobPost(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await JobPost.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default JobPostController;