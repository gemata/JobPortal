// Import the Education model and Sequelize
import Education from "../models/education.entity.js";

// Controller functions
const EducationController = {
  // Create a new Education
  async createEducation(req, res) {
    try {
      const newEducation = await Education.create(req.body);
      return res.status(201).json(newEducation);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all Educations
  async getEducations(req, res) {
    try {
      const Educations = await Education.findAll();
      return res.status(200).json(Educations);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a Education by ID
  async getEducationById(req, res) {
    const { id } = req.params;
    try {
      const EducationRecord = await Education.findByPk(id);
      if (!EducationRecord) {
        return res.status(404).json({ message: "Education not found" });
      }
      return res.status(200).json(EducationRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a Education
  async updateEducation(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedEducation] = await Education.update(
        body,
        {
          where: { id },
          returning: true, // Return the updated Education object
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Education not found" });
      }
      return res.status(200).json(updatedEducation);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an Education
  async deleteEducation(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Education.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Education not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all Educations by user ID
  async getEducationsByUserId(req, res) {
    const { id } = req.params;
    try {
      const Educations = await Education.findAll({ where: { UserId: id } });
      if (!Educations.length) {
        return res
          .status(404)
          .json({ message: "No education entries found for this user" });
      }
      return res.status(200).json(Educations);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default EducationController;
