const { connect } = require("mongoose");
require("dotenv").config();
const db = async () => {
  await connect(process.env.MONGODB_URL);
  console.log("server connect Successfully !!");
};

module.exports = db;
