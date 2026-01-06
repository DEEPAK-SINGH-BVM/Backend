// const mongoose = require("mongoose");

// const productSchema = mongoose.Schema({
//   name: String,
//   price: Number,
//   des: String,
// });

// const Product = mongoose.model("Product", productSchema);
// module.exports = Product;

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  des: String,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;