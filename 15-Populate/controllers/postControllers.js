const mongoose = require("mongoose");
const Post = require("../model/PostModel");
const User = require("../model/userModel")

const createPost = async (req, res) => {
  // console.log("Create Post Working");
  try {
    const { title, postBy } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Blog title Required !!" });
    }
    if (!postBy) {
      return res.status(400).json({ message: "User Id Required" });
    }

    // MongoDB ObjectIds are 24-character hexadecimal strings (0–9, a–f)

    const user = await User.findById(postBy);
    if(!user){
      return res.status(400).send({message:"User Not Found !!"})
    }
    const newPost = await Post.create({ title, postBy });
    res.status(200).json(newPost);
  } catch (error) {
    res.json({ message: "Error in Create Post" });
  }
};
const getAllPost = async (req, res) => {
  try {
    // populate() automatically fetches related documents using ObjectId references.
    const getPost = await Post.find().populate("postBy");
    res.status(200).json(getPost);
  } catch (error) {
    res.json({ message: "Error in Get Post" });
  }
};

module.exports = { createPost, getAllPost };
