import express from "express";
import dotenv from "dotenv";

import database from "./database.js";
import product from "./controllers/product.js";

dotenv.config();

await database;

const { PORT } = process.env;

const app = express();
const router = express.Router();

app.use(express.json());
app.use("/api/v1", router);

router.use("/product", product);

app.listen(PORT, () =>
  console.log(`server listen on http://localhost:${PORT}`)
);

// server health test
router.get("/", (req, res) => {
  res.status(200).send("Server ok!");
});
