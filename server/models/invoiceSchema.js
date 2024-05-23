const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    subscriptionPlan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubscriptionPlan',
        required: true
    },
    amountPaid: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const InvoiceM = mongoose.model('InvoiceM', invoiceSchema);

module.exports = InvoiceM;
