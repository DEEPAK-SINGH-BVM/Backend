const express = require("express");
const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const userValidation = require("../middleware/userMiddleware");

const router = express.Router();

router.get('/user',getUser);
router.get('/user/:id',getUserById);
router.post("/user",userValidation,createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id",deleteUser);

module.exports = router