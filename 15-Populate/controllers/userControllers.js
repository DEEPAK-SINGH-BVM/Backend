const { User } = require("../model/PostModel");

const createUser = async (req, res) => {
  // destructure of validation
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
};

const getAllUser = async (req, res) => {
  const getUser = await User.find();
  res.status(200).json(getUser);
};

module.exports = { createUser, getAllUser };
