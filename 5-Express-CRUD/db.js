const { connect } = require("mongoose");
require("dotenv").config();
const db = async () => {
  try {
    await connect(process.env.MONGO_DB);
    //   await connect("mongodb+srv://deepaksinghbvminfotech_db_user:3i1vruw8sQ3AROkB@cluster1.ukqa7iy.mongodb.net/express_crud");
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