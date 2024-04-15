// Import the InterviewList model and Sequelize
import InterviewList from "../models/InterviewList.entity.js";

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
