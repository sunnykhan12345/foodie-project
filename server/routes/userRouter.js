import express from "express";
import { SignOut, Signup } from "../controllers/authController.js";
import { Signin } from "../controllers/authController.js";
const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.get("/signout", SignOut);

export default router;
