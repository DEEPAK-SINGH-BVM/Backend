
import User from "../model/userModel.js";

async function signupMiddleware(req, res, next) {
  const { firstName, lastName,email, password , role, gender } = req.body;

  const isExist = await User.findOne({ email });

  if (isExist) {
    return res.status(400).send({ message: "User Already Exits" });
  }

  if (!firstName ||!lastName || !email ||!role ||!gender ) {
    return res.status(400).send({ message: "All Fields Required Compulsory !!"});
  } 
  // if (!lastName) {
  //   return res.status(400).send({ message: "User Last Name Required" });
  // }

  // if (!email) {
  //   return res.status(400).send({ message: "Email Required" });
  // }

  // if (!role) {
  //   return res.status(400).send({ message: "Role Required" });
  // }

  // if (!gender) {
  //   return res.status(400).send({ message: "gender Required" });
  // }

  if (password.length < 6) {
    return res.status(400).send({ message: "Password Must Be Strong" });
  }
  next();
}

export default signupMiddleware;

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
