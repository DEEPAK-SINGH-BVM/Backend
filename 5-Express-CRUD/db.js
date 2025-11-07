const { connect } = require("mongoose");
require("dotenv").config();
const db = async () => {
  try {
    // await connect("mongodb://127.0.0.1:27017/myDatabase");
    await connect(process.env.MONGO_DB);
    console.log("Connected Successfully to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

module.exports = db;

// const mongoose = require("mongoose");
// require("dotenv").config();

// const db = async () => {
//   await mongoose.connect(process.env.MONGO_DB);
//   console.log("Connect Successfully ");
// };

// module.exports = db