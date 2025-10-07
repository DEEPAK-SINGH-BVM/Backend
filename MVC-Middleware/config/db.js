const { connect } = require("mongoose");
require("dotenv").config();

const db = async () => {
  try {
    await connect(process.env.MONGO_DB);
    console.log("Connect Server Done !!");
  } catch (error) {
    console.log("Not Connect To Server");
  }
};

module.exports = db;
