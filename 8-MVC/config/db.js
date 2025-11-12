// const { connect } = require("mongoose");

// const db = async () => {
//   await connect("mongodb://localhost:27017");
//   console.log("Server Connect Successfully !!");
// };

// module.exports = db
const { connect } = require("mongoose");
require("dotenv").config();

const db = async () => {
  await connect(process.env.MONGO_DB);
  console.log("Connect to server");
};

module.exports = db;
