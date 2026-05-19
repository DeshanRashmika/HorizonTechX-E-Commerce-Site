const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({}); 
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, description, price, imageUrl, countInStock } = req.body;
        
        const newProduct = new Product({
            name,
            description,
            price,
            imageUrl,
            countInStock
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Data insertion failed', error: error.message });
    }
});

module.exports = router;