import {
  userLogin,
  registerUser,
  userCredits,
  paymentRazorPay,
  verifyRazorpay,
} from "../controllers/userController.js";
import express from "express";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", userLogin);
userRouter.get("/credits", userAuth, userCredits);
userRouter.post("/pay-razor", userAuth, paymentRazorPay);
userRouter.post("/verify-razor", verifyRazorpay);

export default userRouter;
