import mongoose from "mongoose";

// Database Model with Mongoose
const productsSchema = new mongoose.Schema({
  code: Number,
  img: String,
  label: String,
  price: Number,
});

export default mongoose.model('products', productsSchema);
