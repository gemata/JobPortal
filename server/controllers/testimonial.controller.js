// Import the Testimonial model and Sequelize
import Testimonial from "../models/testimonial.entity.js";
import UserImage from "../models/userImage.entity.js";
import WorkExperience from "../models/workexperience.entity.js";
import User from "../models/user.entity.js";

// Controller functions
const TestimonialController = {
  // Create a new Testimonial
  async createTestimonial(req, res) {
    try {
      const newTestimonial = await Testimonial.create(req.body);
      return res.status(201).json(newTestimonial);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all Testimonials
  async getTestimonials(req, res) {
    try {
      const testimonials = await Testimonial.findAll({
        include: [
          {
            model: User,
            as: "User",
            include: [
              {
                model: UserImage,
                as: "UserImage",
              },
              {
                model: WorkExperience,
                as: "WorkExperiences",
              },
            ],
          },
        ],
      });
      return res.status(200).json(testimonials);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a Testimonial by ID
  async getTestimonialById(req, res) {
    const { id } = req.params;
    try {
      const testimonialRecord = await Testimonial.findByPk(id);
      if (!testimonialRecord) {
        return res.status(404).json({ message: "Testimonial not found" });
      }
      return res.status(200).json(testimonialRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a Testimonial
  async updateTestimonial(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedTestimonial] = await Testimonial.update(
        body,
        {
          where: { id },
          returning: true, // Return the updated Testimonial object
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Testimonial not found" });
      }
      return res.status(200).json(updatedTestimonial);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete a Testimonial
  async deleteTestimonial(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Testimonial.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Testimonial not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all Testimonials by user ID
  async getTestimonialsByUserId(req, res) {
    const { id } = req.params;
    try {
      const testimonials = await Testimonial.findAll({ where: { userId: id } });
      if (!testimonials.length) {
        return res
          .status(404)
          .json({ message: "No Testimonial entries found for this user" });
      }
      return res.status(200).json(testimonials);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default TestimonialController;
