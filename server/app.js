import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connectdb from "./config/monodb.js";

dotenv.config(); 

const app = express();

// PORT
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API Successfully Connected!");
});

// Connect to MongoDB
Connectdb();

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
