const express = require("express");
const router = express.Router();

const authenticate = (req,res,next) =>{
    const token = req.header('Authorization')
    
}
