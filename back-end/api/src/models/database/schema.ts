import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Products = mongoose.model('products', productsSchema);

export { Products }
