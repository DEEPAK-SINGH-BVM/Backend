const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");

const register = async (req, res) => {
  const { name, password, role } = req.body;
  if (!name) {
    res.status(400).json({ message: "Name Required " });
  }
  if (password.length < 6) {
    res.status(400).json({ message: "Password Must be Strong !!" });
  }
  if (!role) {
    res.status(400).json({ message: "Role Compulsory" });
  }

  const isMatch = await User.findOne({ name });
  if (isMatch) {
    res.status(400).json({ message: "User Already Registered !!" });
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, password: hashPassword, role });
  await user.save();

  res.json({ message: "User Registered" });
};

const login = async (req, res) => {
  const { name, password } = req.body;

  const user = await User.findOne({ name });

  if (!user) {
    return res.status(400).json({ message: "User Not Found " });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Password !!" });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );

  res.json({ message: "Login Successfully !!", token });
};

module.exports = { register, login };
