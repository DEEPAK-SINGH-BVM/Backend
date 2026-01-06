// const { connect } = require("mongoose");
// require("dotenv").config();

// const db = async () => {
//   await connect(process.env.MONGO_DB);
//   console.log("Connect to server");
// };

// module.exports = db;

const mongoose = require("mongoose");
require("dotenv").config();

const db = async ()=>{
  await mongoose.connect(process.env.MONGO_DB);
  console.log("Connect to server");
};

module.exports = db;
