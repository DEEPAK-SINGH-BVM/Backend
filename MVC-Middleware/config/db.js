const { connect } = require("mongoose");

const db = async () => {
  await connect("mongodb://localhost:27017");
  console.log("Connect Server Done !!");
};

module.exports = db