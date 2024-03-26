
import { Schema, model } from 'mongoose';

const ChatLogSchema = new Schema(
  {
    sender: { type: Number, required: true },  //The number here will be the id of the user in mysql. remember when implementing
                                               // Also, we will generate Unique identifiers for guest user chat  or if we want to implement annonymous chat
  },
  {
    reciever: { type: Number, required: true }, //this is the id of the reciever
  },
  {
    message: { type: String, required: true },
  },
  { timestamp: {type: Date,
    default: Date.now }}
);

const ChatLog = model('ChatLog', ChatLogSchema);

export default ChatLog;