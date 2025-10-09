const express = require("express");
const router = express.Router();
const authorize = require("../middleware/userMiddleware")
const jwt = require("jsonwebtoken");
const { register, login } = require("../controllers/userControllers");

const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(400).json({ message: "Access Denied !!!!" });
  }
  try {
    // The token is signed using JWT_SECRET. jwt.verify(token, JWT_SECRET)
    //  checks the token is valid and returns the payload, which is then stored in verified/req.user.
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "invalid Token" });
  }
};

router.post("/register", register);
router.post("/login",login)

router.get("/admin", authenticate, authorize(['create','read','update','delete'])),(req,res)=>{
    res.json({message :"Admin Content"})
};

router.get('editor',authenticate,authorize(['create','read','update'])),(req,res)=>{
    res.json({message:"Editor Content"})
}

router.get('user',authenticate , authorize (['read'])),(req,res)=>{
    res.json({message:"User Content"})
}

module.exports = router