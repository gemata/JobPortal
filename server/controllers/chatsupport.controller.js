import ChatSupport from "../models/chatsupport.entity.js";

const ChatSupportController = {
  async createChatSupport(req, res) {
    try {
      const newChatSupport = await ChatSupport.create(req.body);
      return res.status(201).json(newChatSupport);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getChatSupports(req, res) {
    try {
      const ChatSupports = await ChatSupport.findAll();
      return res.status(201).json(ChatSupports);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getChatSupportById(req, res) {
    const { id } = req.params;
    try {
      const ChatSupportRecord = await ChatSupport.findByPk(id);
      if (!ChatSupportRecord) {
        return res.status(404).json({ message: "ChatSupport not found" });
      }
      return res.status(200).json(ChatSupportRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateChatSupport(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedChatSupport] = await ChatSupport.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "ChatSupport not found" });
      }
      return res.status(200).json(updatedChatSupport);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteChatSupport(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await ChatSupport.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "ChatSupport not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default ChatSupportController;
