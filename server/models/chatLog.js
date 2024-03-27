import { Schema, model } from 'mongoose';

const ChatLogSchema = new Schema(
  {
    sender: { type: Number, required: true },
    receiver: { type: Number, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const ChatLog = model('ChatLog', ChatLogSchema);

export default ChatLog;