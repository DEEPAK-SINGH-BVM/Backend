const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  postBy: {
    type: mongoose.Schema.Types.ObjectId,
    // user details
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

module.exports = { User, Post };
