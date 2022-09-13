import mongoose from "mongoose";

// Database Model with Mongoose
const productsSchema = new mongoose.Schema({
  code: Number,
  img: String,
  label: String,
  price: Number,
});

const Products = mongoose.model('products', productsSchema);

export { Products }
