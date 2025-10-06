const express = require("express");
const {
  getProduct,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const productMiddleware = require("../middleware/productMiddleware");
const router = express.Router();

router.get("/", getProduct);
router.get("/:id", getProductId);
router.post("/",productMiddleware, createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
