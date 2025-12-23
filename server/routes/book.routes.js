// import express from "express"
// import { bookController, booklistController } from "../controllers/book.controller";

// const bookrouter=express.Router();

// // book/add-book
// bookrouter.post("/add-book",bookController)
// bookrouter.get("/booklists", booklistController);

import express from "express";
import {
  bookController,
  booklistController,
} from "../controllers/book.controller.js";

const bookrouter = express.Router();

// POST /book/add-book → add a new booking
bookrouter.post("/add-book", bookController);

// GET /book/booklists → get all bookings
bookrouter.get("/booklists", booklistController);

export default bookrouter;
