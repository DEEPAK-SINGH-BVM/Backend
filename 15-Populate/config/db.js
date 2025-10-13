const mongoose = require("mongoose");
require("dotenv").config()
const db = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Server Connect Successfully !!");
};

module.exports = db;
