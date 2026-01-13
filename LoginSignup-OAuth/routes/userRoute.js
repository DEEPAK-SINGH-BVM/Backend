const express = require("express");
const {
  signup,
  login,
  getUser,
  deleteUser,
  getUserId,
} = require("../controllers/userControllers.js");
const router = express.Router();

router.get("/", getUser);
router.get("/:id", getUserId);
router.post("/signup", signup);
router.post("/login", login);
router.delete("/:id", deleteUser);

module.exports = router;
