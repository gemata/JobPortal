import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });

console.log("Loaded MongoDB URI:", process.env.MONGODB_URI);

const mongooseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default mongooseConnection;
