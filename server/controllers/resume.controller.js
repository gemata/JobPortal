import Resume from "../models/resume.entity.js";

// Controller functions
const ResumeController = {
  // Create a new Resume
  async createResume(req, res) {
    try {
      const newResume = await Resume.create(req.body);
      return res.status(201).json(newResume);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all Resumes
  async getResumes(req, res) {
    try {
      const Resumes = await Resume.findAll();
      return res.status(200).json(Resumes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a Resume by ID
  async getResumeById(req, res) {
    const { id } = req.params;
    try {
      const Resume = await Resume.findByPk(id);
      if (!Resume) {
        return res.status(404).json({ message: "Resume not found" });
      }
      return res.status(200).json(Resume);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a Resume
  async updateResume(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedResume] = await Resume.update(body, {
        where: { id },
        returning: true, // Return the updated Resume object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Resume not found" });
      }
      return res.status(200).json(updatedResume[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an Resume
  async deleteResume(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Resume.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Resume not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default ResumeController;
