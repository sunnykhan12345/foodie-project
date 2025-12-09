import mongoose from "mongoose";

const Connectdb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB}`);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default Connectdb;
