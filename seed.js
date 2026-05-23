const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [{
            name: "Arduino Uno R3 Microcontroller",
            description: "An open-source microcontroller board based on the Microchip ATmega328P. Ideal for robotics, automation, and electronics prototyping.",
            price: 15.50,
            imageUrl: "https://images.unsplash.com/photo-1608564697171-2dc630b7023d?q=80&w=500",
            countInStock: 50
        },
        {
            name: "Raspberry Pi 4 Model B (4GB)",
            description: "A high-performance, quad-core 64-bit credit-card-sized single-board computer. Supports dual-display output at resolutions up to 4K.",
            price: 55.00,
            imageUrl: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?q=80&w=500",
            countInStock: 20
        },
        {
            name: "Digital Multimeter with LCD Display",
            description: "A versatile electronic measuring instrument for troubleshooting electrical problems, measuring voltage, current, and resistance.",
            price: 24.99,
            imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=500",
            countInStock: 15
        },
        {
            name: "HC-SR04 Ultrasonic Distance Sensor",
            description: "Provides 2cm to 400cm of non-contact measurement functionality with a ranging accuracy that can reach up to 3mm. Great for obstacle-avoiding robots.",
            price: 3.50,
            imageUrl: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=500",
            countInStock: 100
        },
        {
            name: "SG90 Micro Servo Motor 9g",
            description: "Tiny and lightweight servo motor with high output power. Can rotate approximately 180 degrees (90 in each direction).",
            price: 4.20,
            imageUrl: "https://images.unsplash.com/photo-1597423498219-04418210827d?q=80&w=500",
            countInStock: 75
        },
        {
            name: "Soldering Iron Kit 60W",
            description: "Temperature adjustable soldering iron tool with inner-heated ceramic technology. Comes with basic soldering accessories.",
            price: 18.00,
            imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=500",
            countInStock: 12
        },
        {
            name: "16x2 LCD Display Module (Blue Backlight)",
            description: "Industrial standard HD44780 equivalent controlled LCD layer. Can display 2 lines of 16 characters each with built-in white LED backlight.",
            price: 5.50,
            imageUrl: "https://images.unsplash.com/photo-1517055729445-fa7d27394b48?q=80&w=500",
            countInStock: 40
        },
        {
            name: "L298N Dual H-Bridge Motor Driver",
            description: "High power motor driver module for driving DC and Stepper motors. Contains an internal 5V supply option.",
            price: 6.80,
            imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500",
            countInStock: 35
        },
        {
            name: "ESP32 NodeMCU Development Board",
            description: "Integrated Wi-Fi and Bluetooth microchip with dual-core MCU, making it perfect for IoT (Internet of Things) applications.",
            price: 8.50,
            imageUrl: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=500",
            countInStock: 60
        },
        {
            name: "Breadboard (830 Tie-Points)",
            description: "Full size clear-coded solderless breadboard with 2 independent power lanes, ideal for high-frequency and low-noise circuits prototyping.",
            price: 4.50,
            imageUrl: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=500",
            countInStock: 120
        },
        {
            name: "Jumper Wires Kit (120 Pieces)",
            description: "Assorted multi-colored ribbon of 40-pin Male-to-Male, Male-to-Female, and Female-to-Female flexible jumper wires for breadboarding.",
            price: 3.99,
            imageUrl: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=500",
            countInStock: 200
        },
        {
            name: "5V 4-Channel Relay Module",
            description: "Allows microcontroller platforms like Arduino or Pi to control high voltage/high current electrical appliances safely.",
            price: 7.50,
            imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500",
            countInStock: 30
        }
    ];
mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('MongoDB connected for seeding...');
        try {
            await Product.deleteMany();
            console.log('Existing products cleared.');

            await Product.insertMany(products);
            console.log('Database successfully seeded with new 3D tech products!');
            process.exit();
        } catch (error) {
            console.error('Error seeding data:', error);
            process.exit(1);
        }
    })
    .catch((err) => {
        console.error('Database connection error:', err);
        process.exit(1);
    });
