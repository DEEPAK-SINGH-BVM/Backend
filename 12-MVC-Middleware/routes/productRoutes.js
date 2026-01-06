// const express = require("express");
// const {
//   getProduct,
//   getProductId,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// } = require("../controllers/productControllers");
// const productMiddleware = require("../middleware/productMiddleware");
// const router = express.Router();

// router.get("/products", getProduct);
// router.get("/products/:id", getProductId);
// router.post("/products", productMiddleware, createProduct);
// router.patch("/products/:id", updateProduct);
// router.delete("/products/:id", deleteProduct);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getProduct,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const productMiddleware = require("../middleware/productMiddleware");

router.get("/products", getProduct);
router.get("/products/:id", getProductId);
router.post("/products", productMiddleware, createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
