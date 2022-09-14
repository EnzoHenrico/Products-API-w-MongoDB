import express, { Router, Request, Response, NextFunction } from "express";
import { checkSchema, validationResult } from "express-validator";

import bodySchema from "../middlewares/schema";
import { addProduct, deleteProduct, getProductByCode, getProductByLabel, updateProduct } from "../services/product";

const router: Router = express.Router();

// GET - request product data by code or name
router.get("/find-code", async (req: Request, res: Response) => {
  const { code } = req.body;
  const service = await getProductByCode(code);
  
  res.status(service.code).json({ message: service.message, results: service.results });
});

router.get("/find-label", async (req: Request, res: Response) => {
  const { label } = req.body;
  const service = await getProductByLabel(label);
  
  res.status(service.code).json({ message: service.message, results: service.results });
});

// POST - Add product on database
router.post("/add", checkSchema(bodySchema), async (req: Request, res: Response, next: NextFunction) => {
  // Middleware error handler
  const error = validationResult(req);
  
  if (!error.isEmpty()) {
    res.status(400).json(error);
    return next(error);
  }

  // Database insertion response
  const {code, label, price, img} = req.body;
  const service = await addProduct(code, label, price, img);
  
  res.status(service.code).json({message: service.message});
});

// PATCH - Update product by code
router.patch("/update", async (req: Request, res: Response) => {
  const { code, ...changes } = req.body;
  const service = await updateProduct(code, changes);
  
  res.status(service.code).json({ message: service.message });
});

// DELETE - Remove product by code
router.delete("/delete", async (req: Request, res: Response) => {
  const { code } = req.body;
  const service = await deleteProduct(code);
  
  res.status(service.code).json({ message: service.message });
});

export default router;
