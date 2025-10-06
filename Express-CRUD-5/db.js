const { connect } = require("mongoose");

const db = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/myDatabase");
    console.log("Connected Successfully to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

module.exports = db;