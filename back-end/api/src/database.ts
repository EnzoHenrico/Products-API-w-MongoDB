import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_PORT, DB_HOST } = process.env;

const DB_CONNECTION = async () => {
  try {
    await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/products`);
    console.log('Database connected!');
  } catch (err) {
      console.log('Failed to connect to database: ', err);
  }
};

export default DB_CONNECTION;
