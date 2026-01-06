// const express = require("express");
const User = require("../model/userSchema");

// const app = express();
// app.use(express.json());

// normal
// app.get("/", async (req, res) => {
//   let data = await User.find();
//   res.send(data);
// });

// mvc
const getUser = async (req, res) => {
  let data = await User.find();
  res.send(data);
};

const getUserById = async (req, res) => {
  let data = await User.findById(req.params.id);
  res.send(data);
};

const createUser = async (req, res) => {
  let data = await User.create(req.body);
  res.send(data);
};

const updateUser = async (req, res) => {
  let data = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(data);
};

const deleteUser = async (req, res) => {
  let data = await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User Delete Successfully !!", data });
};

module.exports = { getUser, getUserById, createUser, updateUser, deleteUser };

// const getUser = async (req,res)=>{
//   let data = await User.find()
//   res.send(data)
// }

// const getUserById = async (req,res)=>{
//   let data = await User.findById(req.params.id);
//   res.send(data)
// }

// const createUser = async (req, res) => {
//   let data = await User.create(req.body);
//   res.send(data);
// };

// const updateUser = async (req, res) => {
//   let data = await User.findByIdAndUpdate(req.params.id,req.body);
//   res.send(data);
// };

// const deleteUser = async (req, res) => {
//   let data = await User.findByIdAndDelete(req.params.id);
//   res.send(data);
// };

// module.exports = {getUser,getUserById , createUser , updateUser , deleteUser};