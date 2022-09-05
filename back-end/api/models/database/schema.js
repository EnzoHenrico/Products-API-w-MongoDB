import mongoose from "mongoose";

// Database Model with Mongoose
export default schema = new mongoose.Schema({
  _id: Number,
  code: Number,
  img: URL,
  label: String,
  price: Number,
});
