const mongoose = require("mongoose");
require("dotenv").config()
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Server Connect Successfully !!");
    } catch (error) {
      console.log("Not connect to server",error);
    }
};

module.exports = db;
