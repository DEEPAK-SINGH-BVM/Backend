const express = require("express");
const { getAllUser, createUser, getUserWithPost } = require("../controllers/userControllers");
const router = express.Router();

router.get("/", getAllUser);
router.post("/", createUser);
router.get("/:id", getUserWithPost);

module.exports = router;
