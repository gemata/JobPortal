import UserProfile from "../models/userProfile.entity.js";

// Controller functions
const UserProfileController = {
  // Create a new UserProfile
  async createUserProfile(req, res) {
    try {
      const newUserProfile = await UserProfile.create(req.body);
      return res.status(201).json(newUserProfile);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all UserProfiles
  async getUserProfiles(req, res) {
    try {
      const UserProfiles = await UserProfile.findAll();
      return res.status(200).json(UserProfiles);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a UserProfile by ID
  async getUserProfileById(req, res) {
    const { id } = req.params;
    try {
      const UserProfileRecord = await UserProfile.findByPk(id);
      if (!UserProfileRecord) {
        return res.status(404).json({ message: "UserProfile not found" });
      }
      return res.status(200).json(UserProfileRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a UserProfile by User ID
  async getUserProfileByUserId(req, res) {
    const { UserId } = req.params;
    try {
      const UserProfileRecord = await UserProfile.findOne({ where: { UserId } });

      if (!UserProfileRecord) {
        return res.status(404).json({ message: "User Profile not found" });
      }
      return res.status(200).json(UserProfileRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a UserProfile
  async updateUserProfile(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedUserProfile] =
        await UserProfile.update(body, {
          where: { id },
          returning: true, // Return the updated UserProfile object
        });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "UserProfile not found" });
      }
      return res.status(200).json(updatedUserProfile);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an UserProfile
  async deleteUserProfile(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await UserProfile.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "UserProfile not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

};

export default UserProfileController;