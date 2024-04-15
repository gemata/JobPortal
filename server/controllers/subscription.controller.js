import Subscription from "../models/subscription.entity.js";

const SubscriptionController = {
  async createSubscription(req, res) {
    try {
      const newSubscription = await Subscription.create(req.body);
      return res.status(201).json(newSubscription);
    } catch (error) {
      return res.staus(500).json({ error: error.message });
    }
  },

  async getSubscriptions(req, res) {
    try {
      const Subscriptions = await Subscription.findAll();
      return res.status(201).json(Subscriptions);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getSubscriptionById(req, res) {
    const { id } = req.params;
    try {
      const SubscriptionRecord = await Subscription.findByPk(id);
      if (!SubscriptionRecord) {
        return res.status(404).json({ message: "Subscription not found" });
      }
      return res.status(200).json(SubscriptionRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateSubscription(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedSubscription] = await Subscription.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Subscription not found" });
      }
      return res.status(200).json(updatedSubscription[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteSubscription(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Subscription.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Subscription not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default SubscriptionController;
