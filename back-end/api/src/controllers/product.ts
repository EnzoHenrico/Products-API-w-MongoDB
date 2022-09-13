import express, { Router, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";

import bodySchema from "../middlewares/schema";
import { addProduct, getProductByCode, getProductByName } from "../services/product";

const router: Router = express.Router();

// GET product data by code or name
router.get("/find-code", async (req: Request, res: Response) => {
  const { code } = req.body;
  const service = await getProductByCode(code);
  res.status(service.code).json({ message: service.message, results: service.results });
});

router.get("/find-name", async (req: Request, res: Response) => {
  const { name } = req.body;
  const service = await getProductByName(name);
  res.status(service.code).json({ message: service.message, results: service.results });
});

// Add product on database
router.post("/add", checkSchema(bodySchema), async (req: Request, res: Response) => {
  // Middleware error response
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json(error);
  }

  // Database insertion response
  const {code, label, price, img} = req.body;
  const service = await addProduct(code, label, price, img);
  res.status(service.code).json({message: service.message});
});

export default router;
