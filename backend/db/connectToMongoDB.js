import mongoose from "mongoose";

const connectToMongdDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connection", error.message);
  }
};

export default connectToMongdDB;
