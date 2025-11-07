const Product = require("../model/productModel");

const getProduct = async (req, res) => {
  try {
    let data = await Product.find();
    if (!data) {
      res.status(400).send({ message: "Product Details Not Found !!" });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: "Product Not Found !!" });
  }
};

const getProductId = async (req, res) => {
  try {
    let data = await Product.findById(req.params.id);
    if (!data) {
      res.status(400).send({ message: "Product Details Not Found !!" });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: "Product Not Found  !!" });
  }
};

const createProduct = async (req, res) => {
  try {
    // forMultiple Data
    // const products = Array.isArray(req.body) ? req.body : [req.body];
    // let data = await Product.create(products);
    let data = await Product.create(req.body);
    if (!data) {
      res.status(400).send({ message: "Product Details Not Found !!" });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: "Product Not Found !!" });
  }
};

const updateProduct = async (req, res) => {
  try {
    let data = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!data) {
      res.status(400).send({ message: "Product Details Not Found !!" });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: "Product Not Found !!" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    let data = await Product.findByIdAndDelete(req.params.id);
    if (!data) {
      res.status(400).send({ message: "Product Details Not Found !!" });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: "Product Not Found !!" });
  }
};

// const getProduct = async (req, res) => {
//   let data = await Product.find();
//   res.send(data);
// };

// const getProductId = async (req, res) => {
//   let data = await Product.findById(req.params.id);
//   res.send(data);
// };

// const createProduct = async (req, res) => {
//   let data = await Product.create(req.body);
//   res.send(data);
// };

// const updateProduct = async (req, res) => {
//   let data = await Product.findByIdAndUpdate(req.params.id, req.body);
//   res.send(data);
// };

// const deleteProduct = async (req, res) => {
//   let data = await Product.findByIdAndDelete(req.params.id);
//   res.send("Product Deleted");
// };

module.exports = {
  getProduct,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
