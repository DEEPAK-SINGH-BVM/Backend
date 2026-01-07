const Post = require("../model/PostModel");
const User = require("../model/userModel");

const createUser = async (req, res) => {
  // destructure of validation
  try {
    const { username, email } = req.body;
    if (!username) {
      return res.status(400).json({ message: "User Name is Required !!" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email Required !!" });
    }
    const isExist = await User.findOne({ email });

    if (isExist) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const newUser = await User.create({ username, email });
    res.status(200).json(newUser);
  } catch (error) {
    res.json({ message: "Error in Create User" });
  }
};

const getUserWithPost = async (req, res) => {
  const userId = req.params.id;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(400).send({ message: "User Not Found !!" });
  }

  const posts = await Post.find({ postBy: userId }).select("title");

  return res.status(200).send({user,posts});
};

const getAllUser = async (req, res) => {
  try {
    const getUser = await User.find();
    res.status(200).json(getUser);
  } catch (error) {
    res.json({ message: "Error in Get user" });
  }
};

module.exports = { createUser, getAllUser, getUserWithPost };
