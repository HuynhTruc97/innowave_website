const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

// Load biến môi trường
dotenv.config();

const connectDB = require("./config/database");
connectDB(); // Gọi hàm connectDB đã được export



// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productsRoutes = require("./routes/products.routes");
const reviewsRoutes = require("./routes/reviews.routes");
const authRoutes = require("./routes/auth.routes"); // 
app.use("/api/products", productsRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/auth", authRoutes); // 
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  }));

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));