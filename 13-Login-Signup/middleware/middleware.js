// import User from "../model/userModel.js";

// async function signupMiddleware(req, res, next) {
//   const { name, email, password } = req.body;

//   const isExist = await User.findOne({ email });
//   if (isExist) {
//     return res.status(400).send("User Already Exists");
//   }

//   if (!name && !email && !password) {
//     return res.status(400).send("All Fields Required !!");
//   }
//   if (!name) {
//     return res.status(400).send("Name Required !!");
//   }

//   if (!email) {
//     return res.status(400).send("Email Required !!");
//   }

//   if (password.length < 6) {
//     return res.status(400).send("Password Must be Strong !!");
//   }
//   next();
// }

// export default signupMiddleware;

import User from "../model/userModel.js";

async function signupMiddleware(req, res, next) {
  const { name, email, password } = req.body;

  const isExist = await User.findOne({ email });

  if (isExist) {
    return res.status(400).send("User Already Exits");
  }

  if (!name) {
    return res.status(400).send("User Name Required");
  }

  if (!email) {
    return res.status(400).send("Email Required");
  }

  if (password.length < 6) {
    return res.status(400).send("Password Must Be Strong");
  }
  next();
}

export default signupMiddleware;
