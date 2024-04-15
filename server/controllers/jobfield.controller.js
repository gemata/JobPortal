// Import the JobField model and Sequelize
import JobField from "../models/jobfield.entity.js";

// Controller functions
const JobFieldController = {
  // Create a new JobField
  async createJobField(req, res) {
    try {
      const newJobField = await JobField.create(req.body);
      return res.status(201).json(newJobField);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all JobFields
  async getJobFields(req, res) {
    try {
      const JobFields = await JobField.findAll();
      return res.status(200).json(JobFields);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a JobField by ID
  async getJobFieldById(req, res) {
    const { id } = req.params;
    try {
      const JobFieldRecord = await JobField.findByPk(id);
      if (!JobFieldRecord) {
        return res.status(404).json({ message: "JobField not found" });
      }
      return res.status(200).json(JobFieldRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a JobField
  async updateJobField(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedJobField] = await JobField.update(body, {
        where: { id },
        returning: true, // Return the updated JobField object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "JobField not found" });
      }
      return res.status(200).json(updatedJobField[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an JobField
  async deleteJobField(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await JobField.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "JobField not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default JobFieldController;
