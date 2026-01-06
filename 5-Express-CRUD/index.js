// mongoose
// mongoose is ODM library for mongoDB , mongoose simplifies interact with mongoDB database
// it allow you to create & model mongoDB schema

const express = require("express");
const app = express();
const db = require("./db");
const User = require("./userSchema");
app.use(express.json());
// app.use(express.json()) takes JSON data and converts it into a JavaScript object.

app.get("/user", async (req, res) => {
  let data = await User.find();
  res.send(data);
});

app.get("/user/:id", async (req, res) => {
  let data = await User.findById(req.params.id);
  res.send(data);
});

app.post("/user", async (req, res) => {
  // console.log('req.body',req.body);
  // console.log("type ", typeof req.body); 
  let data = await User.create(req.body);
  res.send(data);
});

app.patch("/user/:id", async (req, res) => {
  let data = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(data);
});

app.delete("/user/:id", async (req, res) => {
  let data = await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User Delete Successfully !!", data });
});

app.listen(7020, () => {
  db();
  console.log("Server Start Successfully 7020");
});

// const express = require("express");
// const User = require("./userSchema");
// const db = require("./db");
// const app = express();
// app.use(express.json());

// app.get("/", async (req, res) => {
//   let data = await User.find();
//   res.send(data);
// });

// app.get("/:id", async (req, res) => {
//   let data = await User.findById(req.params.id);
//   res.send(data);
// });

// app.post("/", async (req, res) => {
//   let data = await User.create(req.body);
//   res.send(data);
// });

// app.patch("/:id",async (req,res)=>{
//    let data = await User.findByIdAndUpdate(req.params.id,req.body)
//    res.send(data)
// })

// app.delete("/:id",async (req,res)=>{
//     let data = await User.findByIdAndDelete(req.params.id)
//     res.send("User Delete")
// })

// app.listen(7020, () => {
//   db();
//   console.log("Server Start Successfully 7020");
// });
