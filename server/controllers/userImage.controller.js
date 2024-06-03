import UserImage from "../models/userImage.entity.js";
import fs from "fs";
import path from "path";

// Controller functions
const UserImageController = {
  // Create a new UserImage
  async createUserImage(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const userImage = await UserImage.create({
        UserId: req.body.id,
        s3Key: `${req.body.id}/${req.file.filename}`,
        bucket: 'public/profilePics',
        mime: req.file.mimetype,
      });

      return res.status(201).json({ message: 'File uploaded successfully', userImage });
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

      console.log(body);

      let userImage = await UserImage.findOne({
        where: { UserId: body.id },
      });

      if (userImage) {
        const filePath = `${userImage.bucket}/${userImage.s3Key}`;

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

        userImage.set({
          s3Key: `${body.id}/${req.file.filename}`,
          bucket: 'public/profilePics',
          mime: req.file.mimetype,
          UserId: body.id,
        });
        await userImage.save();
      }
      return res.status(200).json({ message: 'User Image updated successfully', userImage });
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
