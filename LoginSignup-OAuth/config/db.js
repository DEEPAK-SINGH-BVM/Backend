// config/db.js
const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  await mongoose.connect(process.env.MONGO_DB);
  console.log("Connected to Database");
};

module.exports = db;
