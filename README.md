# HorizonTechX_ECommerce 🛒

[cite_start]A robust and scalable Full-Stack E-Commerce Web Application developed as part of the **Horizon TechX Full Stack Development Internship**[cite: 1, 2]. [cite_start]This project implements a fully functional online store with a decoupled architecture, featuring a responsive frontend and a secure, database-driven backend.

---

## 🚀 Features Implemented

- [cite_start]**Product Management:** Dynamically fetches and displays products from a database with full details[cite: 33, 37].
- [cite_start]**Shopping Cart:** Full cart functionality allowing users to add, update, and manage items before purchasing[cite: 34].
- [cite_start]**User Authentication:** Secure user signup and login architecture using encrypted credentials (JWT-ready)[cite: 35].
- [cite_start]**Order Management:** Seamless order placement and automated tracking system[cite: 36].
- [cite_start]**Database Persistence:** Scalable relational/non-relational data mapping for users, products, and order histories.

---

## 🛠️ Tech Stack & Architecture

### Frontend (Client-Side)
- [cite_start]**HTML5 & CSS3:** Semantic markup and modern styling for a clean, user-friendly interface[cite: 30].
- [cite_start]**JavaScript (ES6+):** Responsive UI interactions and asynchronous API consumption using Fetch/Axios[cite: 30].

### Backend (Server-Side)
- [cite_start]**Node.js & Express.js:** Event-driven, non-blocking REST API development[cite: 5, 6].
- [cite_start]**MongoDB & Mongoose:** ODM (Object Data Modeling) layer ensuring rigid schema enforcement and persistent data storage[cite: 6].

---

## 📂 Project Structure

```text
horizontechx-ecommerce-backend/
├── models/               # Database Schemas & Mongoose Models (JPA-like entities)
│   ├── Product.js
│   └── User.js
├── routes/               # REST API Endpoints & Routing Controllers
│   ├── productRoutes.js
│   └── userRoutes.js
├── .env                  # Environment Variables (Configuration)
├── server.js             # Main entry point / Express Server Initialization
└── package.json          # Node.js dependencies and script management
