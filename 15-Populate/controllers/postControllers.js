const { default: mongoose } = require("mongoose");
const { Post } = require("../model/PostModel");

const createPost = async (req, res) => {
  const { title, postBy } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title Required !!" });
  }
  if (!postBy) {
    return res.status(400).json({ message: "User Id Required" });
  }
  if (!mongoose.Types.ObjectId.isValid(postBy)) {
    res.status(400).json({ message: "ID Not Match !!" });
  }
  const newPost = await Post.create({ title, postBy });
  res.status(200).json(newPost);
};

const getAllPost = async (req, res) => {
  const getPost = await Post.find().populate("postBy");
  res.status(200).json(getPost);
};

module.exports = { createPost, getAllPost };
