const { default: mongoose } = require("mongoose");
const { Post } = require("../model/PostModel");

const createPost = async (req, res) => {
  try {
    const { title, postBy } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Blog title Required !!" });
    }
    if (!postBy) {
      return res.status(400).json({ message: "User Id Required" });
    }
    if (!mongoose.Types.ObjectId.isValid(postBy)) {
      res.status(400).json({ message: "ID Not Match !!" });
    }
    const newPost = await Post.create({ title, postBy });
    res.status(200).json(newPost);
  } catch (error) {
    res.json({ message: "Error in Create Post" });
  }
};

const getAllPost = async (req, res) => {
  try {
    const getPost = await Post.find().populate("postBy");
    res.status(200).json(getPost);
  } catch (error) {
    res.json({ message: "Error in Get Post" });
  }
};

module.exports = { createPost, getAllPost };
