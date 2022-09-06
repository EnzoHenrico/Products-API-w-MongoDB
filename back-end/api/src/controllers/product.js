import express from "express";
import { body, checkSchema, validationResult } from "express-validator";

import schema from "../middlewares/schema.js";

const router = express.Router();

// GET product data by ID
router.get("/find", (req, res) => {
  res.status(200).json();
});

// Add product on database
router.post("/add", checkSchema(schema), (req, res) => {
  const error = validationResult(req);
  // const { code, label, price } = req.body;

  if (!error.isEmpty()) {
    res.status(400).json(error);
  }
  res.status(200).send("SUCESSO!");
});

export default router;
