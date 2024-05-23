const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
    planName: {
        type: String,
        required: true
    },
    planPrice: {
        type: Number,
        required: true
    },
    planDescription: {
        type: String,
        required: true
    },
    stripeSubscriptionId: {
        type: String,
        required: true
    },
    invoice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invoice'
    },
}, { timestamps: true });

const SubscriptionPlan = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);

module.exports = SubscriptionPlan;
