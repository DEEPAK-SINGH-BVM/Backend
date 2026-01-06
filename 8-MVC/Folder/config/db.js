const mongoose = require("mongoose");

const db = async ()=>{
    await mongoose.connect("mongodb+srv://deepaksinghbvminfotech_db_user:XaXoeeGGRfPGZa33@cluster0.uop9z8c.mongodb.net/");
    console.log('Connect to DataBase');
} 

module.exports = db;