import express from "express";
import { registerUser, loginUser, getUserById, getUserResumes } from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/data", protect, getUserById);
userRouter.post("/resumes",protect,getUserResumes);

export default userRouter;
