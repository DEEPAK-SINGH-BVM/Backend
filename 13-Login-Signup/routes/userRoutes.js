import express from "express";
import { signup, login, getUser, deleteUser, getUserId, getAllUser, updateUser } from "../controllers/userControllers.js";
import signupMiddleware from "../middleware/middleware.js"
const router = express.Router();

router.get("/users/all",getAllUser);
router.get("/users", getUser);
router.get("/users/:id",getUserId);
router.post("/users/signup", signupMiddleware, signup);
router.post("/users/login",login);
router.patch("/users/:id",updateUser);
router.delete("/users/:id",deleteUser);

export default router;