const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const  signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);
  console.log("hashPassword", hashPassword);

  await User.create({ name, email, password: hashPassword });

  res.status(200).send({ message: "Signup Successfully !!" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({ message: "User Not Found !!" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  console.log("Password", password);
  console.log("User_Password", user.password);

  if (!isMatch) {
    return res.status(400).send({ message: "Password was Incorrect" });
  }
  const token = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  res.status(200).send({ message: "Login Successfully!!", token });
};

const getUser = async (req, res) => {
  let users = await User.find();
  res.status(200).send(users);
};

const getUserId = async (req, res) => {
  let usersId = await User.findById(req.params.id);
  res.status(200).json(usersId);
};

const deleteUser = async (req, res) => {
  let users = await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User Delete Successfully", users });
};

module.exports = {signup , login , getUser , getUserId , deleteUser}