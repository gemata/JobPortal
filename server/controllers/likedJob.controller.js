import LikedJob from "../models/likedJob.entity.js";
import JobPost from "../models/JobPost.entity.js";
import JobPosition from "../models/jobposition.entity.js";
import Company from "../models/Company.entity.js";

// Controller functions
const LikedJobController = {
  // Create a new LikedJob
  async createLikedJob(req, res) {
    try {
      const existingLikedJob = await LikedJob.findOne({
        where: {
          UserId: req.body.UserId,
          JobPostID: req.body.JobPostID,
        },
      });

      if (existingLikedJob) {
        return res.status(400).json({ error: "Applicant already Liked for this job post." });
      }

      const newLikedJob = await LikedJob.create(req.body);

      // Increment nrApplicants for the related JobPost
      const jobPost = await JobPost.findByPk(req.body.JobPostID);
      if (jobPost) {
        jobPost.likes += 1;
        await jobPost.save();
      }
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

  // Get all LikedJobs by user ID
  async getLikedJobsByUserId(req, res) {
    const { UserId } = req.params;
    try {
      const LikedJobs = await LikedJob.findAll({
        where: { UserId },
        include: [
          {
            model: JobPost, include: [
              { model: JobPosition },
              { model: Company },
            ]
          }
        ]
      });
      if (!LikedJobs.length) {
        return res.status(404).json({ message: "No Liked jobs found for this user" });
      }
      return res.status(200).json(LikedJobs);
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

export default LikedJobController;