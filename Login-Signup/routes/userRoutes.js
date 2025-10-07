import express from "express";
import { signup, login, getUser } from "../controllers/userControllers.js";
const router = express.Router();

router.get("/users", getUser);
router.post("/signup", signup);
router.post("/login", login);

export default router;
