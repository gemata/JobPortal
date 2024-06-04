import Resume from "../models/resume.entity.js";
import fs from "fs";
import path from "path";

// Controller functions
const ResumeController = {
  // Create a new Resume
  async createResume(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const resume = await Resume.create({
        UserId: req.body.id,
        s3Key: `${req.body.id}/${req.file.filename}`,
        bucket: 'public/resumes',
        mime: req.file.mimetype,
      });

      return res.status(201).json({ message: 'File uploaded successfully', resume });
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

  // Get a Resume by user ID
  async getResumeById(req, res) {
    const { id } = req.params;
    try {
      const ResumeRecord = await Resume.findOne({ where: { UserId: id } });
      if (!ResumeRecord) {
        return res.status(404).json({ message: "Resume not found" });
      }
      return res.status(200).json(ResumeRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a Resume
  async updateResume(req, res) {
    const { id } = req.params;
    const { body } = req;

    try {
      let resume = await Resume.findOne({
        where: { UserId: body.id },
      });

      if (resume) {
        const filePath = `${resume.bucket}/${resume.s3Key}`;

        try {
          if (fs.existsSync(filePath)) {
            await fs.promises.unlink(filePath);
            console.log(`File unlinked: ${filePath}`);
          } else {
            console.log(`File not found: ${filePath}`);
          }
        } catch (error) {
          console.error(`Error unlinking file: ${filePath}`, error);
          throw error;
        }

        resume.set({
          s3Key: `${body.id}/${req.file.filename}`,
          bucket: 'public/resumes',
          mime: req.file.mimetype,
          UserId: body.id,
        });
        await resume.save();
      }
      return res.status(200).json({ message: 'User Image updated successfully', resume });
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
