import express, { Express, Router, Request, Response } from "express";
import dotenv from "dotenv";

import database from "./database";
import product from "./controllers/product";

dotenv.config();

database();

const { PORT } = process.env;

const app: Express = express();
const router: Router = express.Router();

app.use(express.json());
app.use("/api/v1", router);

router.use("/product", product);

app.listen(PORT, () =>
  console.log(`server listen on http://localhost:${PORT}`)
);

// server health test
router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Server ok!");
});
