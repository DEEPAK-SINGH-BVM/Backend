const Product = require("../model/productModel");

const productMiddleware = async (req, res, next) => {
  const { name, price, des } = req.body;

  const exist = await Product.findOne({ name });
  if (exist) {
    return res.status(400).send("Product Already Exits");
  }

  if (!name) {
    return res.status(400).send("Name Required !!");
  }

  if (!price) {
    return res.status(400).send("price Required !!");
  }

  if (!des) {
    return res.status(400).send("Description Required !!");
  }
  next();
};

module.exports = productMiddleware;