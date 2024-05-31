import { where } from "sequelize";
import ApplicantList from "../models/applicantlist.entity.js";
import JobPost from "../models/JobPost.entity.js";

// Controller functions
const ApplicantListController = {
  // Create a new ApplicantList
  async createApplicantList(req, res) {
    try {
      // Check if an entry with the same UserId and JobPostID already exists
      const existingApplicantList = await ApplicantList.findOne({
        where: {
          UserId: req.body.UserId,
          JobPostID: req.body.JobPostID,
        },
      });
  
      if (existingApplicantList) {
        return res.status(400).json({ error: "Applicant already applied for this job post." });
      }
  
      // Create new applicant list entry
      const newApplicantList = await ApplicantList.create(req.body);
  
      // Increment nrApplicants for the related JobPost
      const jobPost = await JobPost.findByPk(req.body.JobPostID);
      if (jobPost) {
        jobPost.nrApplicants += 1;
        await jobPost.save();
      }
  
      return res.status(201).json(newApplicantList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all ApplicantLists
  async getApplicantLists(req, res) {
    try {
      const ApplicantLists = await ApplicantList.findAll();
      return res.status(200).json(ApplicantLists);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a ApplicantList by ID
  async getApplicantListById(req, res) {
    const { id } = req.params;
    try {
      const ApplicantListRecord = await ApplicantList.findByPk(id);
      if (!ApplicantListRecord) {
        return res.status(404).json({ message: "ApplicantListRecord not found" });
      }
      return res.status(200).json(ApplicantListRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

   // Get a ApplicantList by JobPostID
   async getApplicantListByJobPostID(req, res) {
    const { JobPostID } = req.params;
    try {
      const ApplicantListRecord = await ApplicantList.findAll({where: {JobPostID}});
      if (!ApplicantListRecord) {
        return res.status(404).json({ message: "Applicant List empty or not found" });
      }
      return res.status(200).json(ApplicantListRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all selected applicants from list
  async getSelectedApplicants(req, res) {
    const { JobPostID } = req.params;
    try {
      const applicantListRecords = await ApplicantList.findAll({
        where: {
          isSelected: 1,
          JobPostID: JobPostID
        }
      });
      if (applicantListRecords.length === 0) {
        return res.status(404).json({ message: "Applicant List empty or not found" });
      }
      return res.status(200).json(applicantListRecords);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  

  // Update a ApplicantList
  async updateApplicantList(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedApplicantList] = await ApplicantList.update(body, {
        where: { id },
        returning: true, // Return the updated ApplicantList object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "ApplicantList not found" });
      }
      return res.status(200).json(updatedApplicantList[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an ApplicantList
  async deleteApplicantList(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await ApplicantList.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "ApplicantList not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default ApplicantListController;
