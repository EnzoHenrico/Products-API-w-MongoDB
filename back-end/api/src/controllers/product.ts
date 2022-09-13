import express, { Router, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";

import bodySchema from "../middlewares/schema";
import { addProduct } from "../services/product";

const router: Router = express.Router();

// GET product data by ID
router.get("/find", (req: Request, res: Response) => {
  res.status(200).json();
});

// Add product on database
router.post("/add", checkSchema(bodySchema), async (req: Request, res: Response) => {
  const error = validationResult(req);
  const {code, label, price, img} = req.body;
  if (!error.isEmpty()) {
    res.status(400).json(error);
  }
  const { RESPONSE_CODE, RESPONDE_MESSAGE } = await addProduct(code, label, price, img);
  res.status(RESPONSE_CODE).send(RESPONDE_MESSAGE);
});

export default router;
