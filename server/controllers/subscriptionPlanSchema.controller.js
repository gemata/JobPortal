import SubscriptionPlan from "../models/subscriptionPlanSchema.js";

const SubscriptionPlanController = {
  async createSubscriptionPlan(req, res) {
    try {
      const newSubscriptionPlan = await SubscriptionPlan.create(req.body);
      return res.status(201).json(newSubscriptionPlan);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getSubscriptionPlans(req, res) {
    try {
      const subscriptionPlans = await SubscriptionPlan.find();
      return res.status(200).json(subscriptionPlans);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getSubscriptionPlanById(req, res) {
    const { id } = req.params;
    try {
      const subscriptionPlanRecord = await SubscriptionPlan.findById(id);
      if (!subscriptionPlanRecord) {
        return res.status(404).json({ message: "SubscriptionPlan not found" });
      }
      return res.status(200).json(subscriptionPlanRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateSubscriptionPlan(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const updatedSubscriptionPlan = await SubscriptionPlan.findByIdAndUpdate(id, body, { new: true });
      if (!updatedSubscriptionPlan) {
        return res.status(404).json({ message: "SubscriptionPlan not found" });
      }
      return res.status(200).json(updatedSubscriptionPlan);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteSubscriptionPlan(req, res) {
    const { id } = req.params;
    try {
      const deletedSubscriptionPlan = await SubscriptionPlan.findByIdAndDelete(id);
      if (!deletedSubscriptionPlan) {
        return res.status(404).json({ message: "SubscriptionPlan not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default SubscriptionPlanController;
