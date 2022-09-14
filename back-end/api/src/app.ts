import express, { Express, Router, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

import database from "./database";
import product from "./controllers/product";
import { ValidationException } from './models/errors/exceptions';
 
dotenv.config();

database();

const { PORT } = process.env;

const app: Express = express();
const router: Router = express.Router();

app.use(express.json());
app.use("/api/v1", router);

router.use("/product", product);

app.use((error: any, req: Request, res: Response, next: NextFunction)=> {
  if (error instanceof ValidationException) {
    res.status(error.status).json({code: error.status, message: error.message})
  } 
  next(error)
});

app.use((error: any, req: Request, res: Response)=> {
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(PORT, () =>
  console.log(`server listen on http://localhost:${PORT}`)
);

// server health test
router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Server ok!");
});
