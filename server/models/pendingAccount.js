import { Schema, model } from 'mongoose';

const PendingAccountSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmToken: { type: String, default: 'default-token-value' },
    confirmTokenExpire: { type: Date, default: Date.now() + 3600000 },
  },
  { timestamps: true }
);

const PendingAccount = model('PendingAccount', PendingAccountSchema);

export default PendingAccount;