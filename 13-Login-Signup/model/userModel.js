// import mongoose from "mongoose";

// const userSchema = mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model("User", userSchema);
// export default User;

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin","superadmin"],
    default:"user"
  },
});

const User = mongoose.model("User", userSchema);
export default User;