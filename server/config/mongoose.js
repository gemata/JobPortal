import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });

console.log("Loaded MongoDB URI:", process.env.MONGODB_URI);

const mongooseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // const kittySchema = new mongoose.Schema({
    //   name: String
    // });

    // const Kitten = mongoose.model('Kitten', kittySchema);

    // const fluffy = new Kitten({ name: 'fluffy' });
    // await fluffy.save();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default mongooseConnection;
