import express from 'express';
import mongoose from 'mongoose';

import product from './controllers/product.js';

const DB_CONNECTION = mongoose.connect('mongodb://localhost:3001');

const app = express();
const router = express.Router();
const PORT = 3000;

app.use(express.json());
app.use('/api/v1', router);

router.use('/product', product);

app.listen(PORT, () => console.log(`server listen on http://localhost:${PORT}`));

// server health test
app.get('/health', (req, res)=> {
    res.status(200).send('Server ok!');
});

module.exports = { DB_CONNECTION };