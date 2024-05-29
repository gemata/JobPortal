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
      const JobPostRecord = await JobPost.findByPk(id);
      if (!JobPostRecord) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      return res.status(200).json(JobPostRecord);
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

  // Like a Job Post
  async likeJobPost(req, res) {
    const { id } = req.params;
    try {
      const jobPost = await JobPost.findByPk(id);
      if (!jobPost) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      jobPost.likes += 1;
      await jobPost.save();
      return res.status(200).json(jobPost);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Dislike a JobPost
  async dislikeJobPost(req, res) {
    const { id } = req.params;
    try {
      const jobPost = await JobPost.findByPk(id);
      if (!jobPost) {
        return res.status(404).json({ message: "Job Post not found" });
      }
      jobPost.likes -= 1;
      await jobPost.save();
      return res.status(200).json(jobPost);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

};


export default JobPostController;
