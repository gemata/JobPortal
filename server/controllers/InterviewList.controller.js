// Import the InterviewList model and Sequelize
import InterviewList from "../models/InterviewList.entity.js";
import ApplicantList from "../models/applicantlist.entity.js";
import JobPost from "../models/JobPost.entity.js";
import User from "../models/user.entity.js";
import UserProfile from "../models/userProfile.entity.js";

// Controller functions
const InterviewListController = {
  // Create a new InterviewList
  async createInterviewList(req, res) {
    try {
      const newInterviewList = await InterviewList.create(req.body);
      return res.status(201).json(newInterviewList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Create interviews from selected applicants
  async createInterviewsFromSelectedApplicants(req, res) {
    const { id } = req.params;
    const { interviewMethod, address, onlineLink, time, interviewDetails } = req.body;

    try {
      // Get selected applicants for the job post
      const selectedApplicants = await ApplicantList.findAll({
        where: { JobPostID: id, isSelected: 1 },
      });

      if (!selectedApplicants.length) {
        return res.status(404).json({ message: "No selected applicants found for this job post" });
      }

      let newCandidatesNr = selectedApplicants.length;
      // Create interview records for each selected applicant
      const interviewPromises = selectedApplicants.map((applicant) =>
        
        InterviewList.create({
          JobPostID: applicant.JobPostID,
          UserId: applicant.UserId,
          stage: 1,
          is_Selected: 0,
          interviewDetails,
          time,
          interviewMethod,  // Save the interview method
          address: interviewMethod === 'In Person' ? address : null,  // Save address if interview method is In Person
          onlineLink: interviewMethod === 'Online' ? onlineLink : null,  // Save online link if interview method is Online
        })
      );

      const newInterviews = await Promise.all(interviewPromises);


      try {
        const activeJob = await JobPost.findByPk(id);
    
        if (activeJob) {
            activeJob.interviewActive = 1;
            activeJob.interviewStart = time;
            activeJob.interviewNrCandidates = newCandidatesNr;
            activeJob.interviewAddress =  interviewMethod === 'In Person' ? address : null;  // Save address if interview method is In Person
            activeJob.interviewLink= interviewMethod === 'Online' ? onlineLink : null;
            await activeJob.save();  // Await the save operation to ensure it completes successfully
            console.log('Job updated successfully');
        } else {
            console.log('Job not found');
        }
    } catch (error) {
        console.error('Error updating job:', error);
    }
    


      return res.status(201).json(newInterviews);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all InterviewLists
  async getInterviewLists(req, res) {
    try {
      const InterviewLists = await InterviewList.findAll();
      return res.status(200).json(InterviewLists);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a InterviewList by ID
  async getInterviewListById(req, res) {
    const { id } = req.params;
    try {
      const InterviewListRecord = await InterviewList.findByPk(id);
      if (!InterviewListRecord) {
        return res.status(404).json({ message: "Interview list not found" });
      }
      return res.status(200).json(InterviewListRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all InterviewLists by user ID
  async getInterviewListsByUserId(req, res) {
    const { UserId } = req.params;
    try {
      const InterviewLists = await InterviewList.findAll({ where: { UserId } });
      if (!InterviewLists.length) {
        return res.status(404).json({ message: "No interviews found for this user" });
      }
      return res.status(200).json(InterviewLists);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },




  // Get a ApplicantList by JobPostID
  async getInterviewListByJobPostID(req, res) {
    const { JobPostID } = req.params;
    try {
      const InterviewListRecord = await InterviewList.findAll({
        where: { JobPostID },
        include: [
          {
            model: User,
            attributes: ['id', 'firstName', 'lastName', 'email'],
            include: [
              {
                model: UserProfile,
                attributes: ['phoneNumber', 'dateOfBirth']
              }
            ]
          }
        ]
      });
      if (InterviewListRecord.length === 0) {
        return res.status(404).json({ message: "Interview list empty or not found" });
      }
      return res.status(200).json(InterviewListRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },



  // Update a InterviewList
  async updateInterviewList(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedInterviewList] = await InterviewList.update(body, {
        where: { id },
        returning: true, // Return the updated InterviewList object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Interview list not found" });
      }
      return res.status(200).json(updatedInterviewList[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

    // Update a InterviewList
    async updateInterviewListUserNotes(req, res) {
      const { id } = req.params;
      const { body } = req;
      try {
        const [updatedRowsCount, updatedInterviewList] = await InterviewList.update(body, {
          where: { UserId: id },
          returning: true, // Return the updated InterviewList object
        });
        if (updatedRowsCount === 0) {
          return res.status(404).json({ message: "Interview list not found" });
        }
        return res.status(200).json(updatedInterviewList[0]);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },

  // Delete an InterviewList
  async deleteInterviewList(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await InterviewList.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Interview list not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default InterviewListController;
