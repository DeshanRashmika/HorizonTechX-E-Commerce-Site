const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config({ path: '../horizontechx-ecommerce-backend/.env' });

const brands = ['Apple', 'Samsung', 'Sony', 'Dell', 'HP', 'Lenovo', 'Asus', 'Anker', 'JBL', 'Bose', 'Logitech', 'Razer'];
const categories = [
    { name: 'Laptop', priceRange: [500, 2500], images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80', 'https://images.unsplash.com/photo-1531297172868-b7156b162608?w=500&q=80'] },
    { name: 'Smartphone', priceRange: [300, 1200], images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80', 'https://images.unsplash.com/photo-1598327105666-5b89351cb315?w=500&q=80', 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=500&q=80'] },
    { name: 'Tablet', priceRange: [200, 1000], images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80', 'https://images.unsplash.com/photo-1589739900266-43b2843f4c12?w=500&q=80'] },
    { name: 'Wireless Headphones', priceRange: [50, 350], images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80'] },
    { name: 'Earbuds', priceRange: [30, 250], images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80', 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&q=80'] },
    { name: 'Smartwatch', priceRange: [100, 500], images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80'] },
    { name: 'Power Bank', priceRange: [20, 100], images: ['https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80'] },
    { name: 'Selfie Stick', priceRange: [15, 50], images: ['https://images.unsplash.com/photo-1522047862217-063999e7b2fa?w=500&q=80', 'https://images.unsplash.com/photo-1585862705497-b2210be878b2?w=500&q=80'] },
    { name: 'Gaming Mouse', priceRange: [30, 150], images: ['https://images.unsplash.com/photo-1527814050087-379381547944?w=500&q=80'] },
    { name: 'Mechanical Keyboard', priceRange: [50, 200], images: ['https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80'] },
    { name: 'Monitor', priceRange: [150, 800], images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80'] },
    { name: 'Bluetooth Speaker', priceRange: [40, 300], images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80'] }
];

const adjectives = ['Pro', 'Ultra', 'Max', 'Lite', 'Plus', 'Elite', 'Advanced', 'Essential', 'Premium', 'Series X', 'Gen 2'];

function generateProducts(count) {
    const products = [];
    for (let i = 0; i < count; i++) {
        const brand = brands[Math.floor(Math.random() * brands.length)];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        
        // Randomize price within range
        const minP = category.priceRange[0];
        const maxP = category.priceRange[1];
        const price = (Math.random() * (maxP - minP) + minP).toFixed(2);
        
        const imageUrl = category.images[Math.floor(Math.random() * category.images.length)];
        
        products.push({
            name: `${brand} ${category.name} ${adjective}`,
            description: `Experience the next generation of technology with the ${brand} ${category.name} ${adjective}. Engineered for premium performance, stunning design, and uncompromising reliability. Perfect for professionals and enthusiasts alike.`,
            price: parseFloat(price),
            imageUrl: imageUrl,
            countInStock: Math.floor(Math.random() * 200) + 10
        });
    }
    return products;
}

async function seedTechProducts() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected for seeding...');

        console.log('Generating 150 realistic tech products...');
        const techProducts = generateProducts(150);

        await Product.deleteMany();
        console.log('Existing products cleared.');

        await Product.insertMany(techProducts);
        console.log(`Database successfully seeded with 150 new premium tech products!`);
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedTechProducts();
