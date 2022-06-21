import express from 'express';
import { body, checkSchema, validationResult } from 'express-validator';

import schema from '../middlewares/schema.js';

const router = express.Router();

// GET product data by ID
router.get('/find', (req, res)=> {
    
    try {
        res.status(200).json();
        
    } catch (error) {

        res.status(400).send("ERROR");        
    }
});

// Add product on database
router.post('/add', checkSchema(schema), (req, res)=> {
    
    const error = validationResult(req);
    const { _id, label, price } = req.body;

    if(!error.isEmpty()){
        console.log("ERROR: ", error);
        res.status(404).send("Invalid Payload");
    } 
    
    res.status(200).send("SUCESSO!");
});

export default router;