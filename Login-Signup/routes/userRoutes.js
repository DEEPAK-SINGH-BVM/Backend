import express from "express";
import { signup, login, getUser, deleteUser } from "../controllers/userControllers.js";
import signupMiddleware from "../middleware/middleware.js"
const router = express.Router();

router.get("/users", getUser);
router.post("/signup", signupMiddleware, signup);
router.post("/login",login);
router.delete("/:id",deleteUser)

export default router;