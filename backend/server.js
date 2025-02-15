import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import mongoose from "mongoose";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads')); // Mounts the 'uploads' folder to serve images at `/images/:filename`
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test Route for Database Connection
app.get("/api/test-db", (req, res) => {
    const dbStatus = mongoose.connection.readyState;
    if (dbStatus === 1) {
        res.status(200).json({ message: "Database connected successfully!" });
    } else {
        res.status(500).json({ message: "Database not connected.", status: dbStatus });
    }
});

// Default Route
app.get("/", (req, res) => {
    res.send("API WORKING");
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
