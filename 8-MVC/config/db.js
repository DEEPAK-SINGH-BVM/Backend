// const { connect } = require("mongoose");

// const db = async () => {
//   await connect("mongodb://localhost:27017");
//   console.log("Server Connect Successfully !!");
// };

// module.exports = db

const { connect } = require("mongoose");

const db = async () => {
  await connect("mongodb://localhost:27017");
  console.log("Connect to server");
};

module.exports = db;
