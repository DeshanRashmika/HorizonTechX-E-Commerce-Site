const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Database connected successfully!'))
    .catch((err) => console.error('Database connection error:', err));

app.get('/', (req, res) => {
    res.send('E-Commerce Backend Server with MongoDB is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const productRoutes = require('./routes/productRoutes');

app.use('/api/products', productRoutes);