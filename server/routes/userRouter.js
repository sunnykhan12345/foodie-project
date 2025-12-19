
import express from "express";
import {
  Signup,
  Signin,
  SignOut,
  sendOtp,
  verifyOtp,
  resetPassword,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.get("/signout", SignOut);

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword); // ✅ fixed

export default router;
