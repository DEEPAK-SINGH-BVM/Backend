const Product = require("../model/productModel");

const getProduct = async (req, res) => {
  try {
    let data = await Product.find();
    if (data.length === 0) {
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
    res.status(500).send({ message: "Product Not Found As ID !!" });
  }
};

const createProduct = async (req, res) => {
  try {
    // forMultiple Data
    let data = await Product.create(req.body);
    if (!data) {
      res.status(400).send({ message: "Product Details Not Found !!" });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: "Product Not Create !!" });
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
    res.status(500).send({ message: "Product Not Update !!" });
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
    res.status(500).send({ message: "Product Not Delete !!" });
  }
};

module.exports = {
  getProduct,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
