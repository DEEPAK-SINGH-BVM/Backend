const mongoose = require("mongoose");
const Post = require("../model/PostModel");

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

    if (!mongoose.Types.ObjectId.isValid(postBy)) {
      res.status(400).json({ message: "ID Not Match !!" });
    }
    const newPost = await Post.create({ title, postBy });
    res.status(200).json(newPost);
  } catch (error) {
    res.json({ message: "Error in Create Post" });
  }
};

// const createPost = async (req, res) => {
//   const { title, postBy } = req.body;
//   if (!mongoose.Types.ObjectId.isValid(postBy)) {
//     return res.status(400).json({ message: "ID not match" });
//   }
//   const newPost = await Post.create({ title, postBy });
//   res.status(200).json(newPost);
// };

const getAllPost = async (req, res) => {
  try {
    const getPost = await Post.find().populate("postBy");
    res.status(200).json(getPost);
  } catch (error) {
    res.json({ message: "Error in Get Post" });
  }
};

// const getAllPost = async (req, res) => {
//   const getPost = await Post.find().populate("postBy");
//   res.status(200).json(getPost);
// };
module.exports = { createPost, getAllPost };
