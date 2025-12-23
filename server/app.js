import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connectdb from "./config/monodb.js";
dotenv.config();

import router from "./routes/userRouter.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import { bookController } from "./controllers/book.controller.js";
import bookrouter from "./routes/book.routes.js";
const app = express();
// PORT
const port = process.env.PORT || 5000;
// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // frontend port
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
// Test Route
app.get("/", (req, res) => {
  res.send("API Successfully Connected!");
});

app.use("/api/user", router); // auth routes
app.use("/api/user", userRouter);
// for booking crud
app.use("/book", bookrouter);
// Connect to MongoDB
Connectdb();

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
