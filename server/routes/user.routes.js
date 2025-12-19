import express from "express";
import { Signup, Signin, SignOut } from "../controllers/authController.js";
import { getCurrentUser } from "../controllers/user.controller.js";
import { isAuth } from "../middlware/isAuth.js";

const userRouter = express.Router();

userRouter.get("/current", isAuth, getCurrentUser);

export default userRouter;
