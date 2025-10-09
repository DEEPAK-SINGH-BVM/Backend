const express = require("express");
const userMiddleware = require("../middleware/userMiddleware");
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/userControllers");
const router = express.Router();

router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", userMiddleware, createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;