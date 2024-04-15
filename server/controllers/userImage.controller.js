import UserImage from "../models/userImage.entity.js";

// Controller functions
const UserImageController = {
  // Create a new UserImage
  async createUserImage(req, res) {
    try {
      const newUserImage = await UserImage.create(req.body);
      return res.status(201).json(newUserImage);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all UserImages
  async getUserImages(req, res) {
    try {
      const UserImages = await UserImage.findAll();
      return res.status(200).json(UserImages);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a UserImage by User ID
  async getUserImageById(req, res) {
    const { id } = req.params;
    try {
      const UserImageRecord = await UserImage.findOne({ where: { UserId: id } });

      if (!UserImageRecord) {
        return res.status(404).json({ message: "UserImage not found" });
      }
      return res.status(200).json(UserImageRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a UserImage
  async updateUserImage(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedUserImage] = await UserImage.update(body, {
        where: { id },
        returning: true, // Return the updated UserImage object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "UserImage not found" });
      }
      return res.status(200).json(updatedUserImage[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an UserImage
  async deleteUserImage(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await UserImage.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "UserImage not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default UserImageController;
