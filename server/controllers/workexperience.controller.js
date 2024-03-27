// Import the WorkExperience model and Sequelize
import WorkExperience from "../models/workexperience.entity.js";
import { Op } from "sequelize";
import argon2 from "argon2";

// Controller functions
const WorkExperienceController = {
  // Create a new WorkExperience
  async createWorkExperience(req, res) {
    const { body } = req;
    try {
      body.password = await argon2.hash(body.password);

      const newWorkExperience = await WorkExperience.create(req.body);
      return res.status(201).json(newWorkExperience);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all WorkExperiences
  async getWorkExperiences(req, res) {
    try {
      const WorkExperiences = await WorkExperience.findAll();
      return res.status(200).json(WorkExperiences);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a WorkExperience by ID
  async getWorkExperienceById(req, res) {
    const { id } = req.params;
    try {
      const WorkExperience = await WorkExperience.findByPk(id);
      if (!WorkExperience) {
        return res.status(404).json({ message: "WorkExperience not found" });
      }
      return res.status(200).json(WorkExperience);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a WorkExperience
  async updateWorkExperience(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      body.password = await argon2.hash(body.password);

      const [updatedRowsCount, updatedWorkExperience] = await WorkExperience.update(body, {
        where: { id },
        returning: true, // Return the updated WorkExperience object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "WorkExperience not found" });
      }
      return res.status(200).json(updatedWorkExperience[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an WorkExperience
  async deleteWorkExperience(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await WorkExperience.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "WorkExperience not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Send an email
  async forgotPassword(req, res) {
    const { body } = req;
    const email = body.email;

    const WorkExperience = await WorkExperience.findOne({ where: { email } });

    if (!WorkExperience) {
      return res.status(404).json({ message: "WorkExperience not found" });
    }

    res.mailer.send(
      "email",
      {
        to: email, // REQUIRED. This can be a comma delimited string just like a normal email to field.
        subject: "Reset Password", // REQUIRED.
        email: email, // Pass the email as data
      },
      function (err, message) {
        if (err) {
          console.log(err);
          res.send("There was an error sending the email");
          return;
        }
        res.header("Content-Type", "text/plain");
        res.send(message);
      }
    );
  },
};

export default WorkExperienceController;
