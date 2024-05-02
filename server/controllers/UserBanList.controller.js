import UserBanList from "../models/UserBanList.entity.js";

// Controller functions
const UserBanListController = {
  // Create a new UserBanList
  async createUserBanList(req, res) {
    try {
      const newUserBanList = await UserBanList.create(req.body);
      return res.status(201).json(newUserBanList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all UserBanLists
  async getUserBanLists(req, res) {
    try {
      const UserBanLists = await UserBanList.findAll();
      return res.status(200).json(UserBanLists);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a UserBanList by ID
  async getUserBanListById(req, res) {
    const { id } = req.params;
    try {
      const UserBanListRecord = await UserBanList.findByPk(id);
      if (!UserBanListRecord) {
        return res.status(404).json({ message: "UserBanList not found" });
      }
      return res.status(200).json(UserBanListRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a UserBanList
  async updateUserBanList(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedUserBanList] = await UserBanList.update(body, {
        where: { id },
        returning: true, // Return the updated UserBanList object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "UserBanList not found" });
      }
      return res.status(200).json(updatedUserBanList[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an UserBanList
  async deleteUserBanList(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await UserBanList.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "UserBanList not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default UserBanListController;
