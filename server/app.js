import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();

// port
const port = process.env.PORT || 5000;
app.use(cors());
// middleware setup
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api Succesfully Connected!");
});
app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
});
