import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_PORT, DB_HOST } = process.env;

const DB_CONNECTION = mongoose
  .connect(`mongodb://${DB_HOST}:${DB_PORT}/products`)
  .catch((err) => console.log("DATABASE ERROR: ", err))
  .then(console.log("Database ok!"));

export default { DB_CONNECTION };
