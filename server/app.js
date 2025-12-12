import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connectdb from "./config/monodb.js";
dotenv.config();
import { clerkMiddleware } from "@clerk/express";
import router from "./routes/userRouter.js";
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

app.use("/api", router);
// Connect to MongoDB
Connectdb();

app.use(clerkMiddleware());
// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
