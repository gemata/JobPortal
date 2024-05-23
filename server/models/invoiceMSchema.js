import { Schema, model } from 'mongoose';

const InvoiceSchema = new Schema(
  {
    subscriptionPlan: {
      type: Schema.Types.ObjectId,
      ref: 'SubscriptionPlan',
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const InvoiceM = model('InvoiceM', InvoiceSchema);

export default InvoiceM;
