const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  password: String,
  role: { type: String, enum: ["admin", "editor", "user"], default: "user" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
