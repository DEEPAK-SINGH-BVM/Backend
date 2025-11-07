const express = require("express");
const User = require("./userSchema");
const app = express();
const db = require("./db");

const userValidation = require("./middleware/userMiddleware");
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await User.find();
  res.send(data);
});

app.get("/:id",async(req,res)=>{
  let data = await User.findById(req.params.id)
  res.send(data)
})

app.post("/",userValidation, async (req, res) => {
  let data = await User.create(req.body);
  res.send(data);
});

app.patch("/:id", async (req, res) => {
  let data = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(data);
});

app.delete("/:id", async (req, res) => {
  let data = await User.findByIdAndDelete(req.params.id);
  res.send({message:"User Deleted !!",data});
});

app.listen(7040, () => {
  console.log("Server Started Successfully 7040");
  db();
});

// const express = require("express");
// const User = require("./userSchema");
// const db = require("./db");
// const userValidation = require("./middleware/userMiddleware");
// const app = express();
// app.use(express.json());

// app.get("/", async (req, res) => {
//   let data = await User.find();
//   res.send(data);
// });

// app.get("/:id", async (req, res) => {
//   let data = await User.findOne();
//   res.send(data);
// });

// app.post("/", userValidation, async (req, res) => {
//   let data = await User.create(req.body);
//   res.send(data);
// });

// app.patch("/:id", async (req, res) => {
//   let data = await User.findByIdAndUpdate(req.params.id, req.body);
//   res.send(data);
// });

// app.delete("/:id", async (req, res) => {
//   let data = await User.findByIdAndDelete(req.params.id);
//   res.send({ message: "User Delete Successfully" });
// });

// app.listen(7040, () => {
//   db();
//   console.log("Server Start Successfully !!");
// });
