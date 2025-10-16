import express from "express";
import { signup, login, getUser, deleteUser, getUserId } from "../controllers/userControllers.js";
import signupMiddleware from "../middleware/middleware.js"
const router = express.Router();

router.get("/users", getUser);
router.get("/users/:id",getUserId)
router.post("/users/signup", signupMiddleware, signup);
router.post("/users/login",login);
router.delete("/users/:id",deleteUser)

export default router;