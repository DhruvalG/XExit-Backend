import mongoose from "mongoose";

// const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.zjels.mongodb.net/exitease`;
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.kzkj2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export default mongoose
  .connect(uri)
  .then(() => console.log("DB connection established"));