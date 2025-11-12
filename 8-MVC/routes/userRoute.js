// const express = require("express");
// const userMiddleware = require("../middleware/userMiddleware");
// const {
//   getUser,
//   createUser,
//   updateUser,
//   deleteUser,
//   getUserById,
// } = require("../controllers/userControllers");
// const router = express.Router();

// router.get("/", getUser);
// router.get("/:id", getUserById);
// router.post("/", userMiddleware, createUser);
// router.patch("/:id", updateUser);
// router.delete("/:id", deleteUser);

// module.exports = router;

const express = require("express");
const {
  getUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

const router = express.Router();
router.get("/user", getUser);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;