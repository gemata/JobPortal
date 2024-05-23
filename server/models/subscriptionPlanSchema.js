import { Schema, model } from 'mongoose';

const SubscriptionPlanSchema = new Schema(
  {
    planName: { type: String, required: true },
    planPrice: { type: Number, required: true },
    planDescription: { type: String, required: true },
    stripeSubscriptionId: { type: String, required: true },
  },
  { timestamps: true }
);

const SubscriptionPlan = model('SubscriptionPlan', SubscriptionPlanSchema);

export default SubscriptionPlan;
