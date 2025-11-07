import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// export const signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   const hashPassword = await bcrypt.hash(password, 10);

//   const newUser = new User({ name, email, password: hashPassword });

//   await newUser.save();

//   res.status(200).send({ message: "Signup Successfully !!" });
// };

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ name, email, password: hashPassword });
  await newUser.save();

  res.status(200).send({ message: "Signup Successfully !!" });
};

// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (!user) return res.status(400).send({ message: "Invalid Email Address" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).send({ message: "Invalid Password" });

//   const token = jwt.sign(
//     { id: user._id, name: user.name, email: user.email },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "24h",
//     }
//   );

//   res.json({ message: "Login Successfully !!", token });
// };

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send({ message: "Invalid Email Address" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({ message: "Invalid Password !!" });
  }

  const token = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );
  console.log(token, "tokennnnnnnnnnnnn");

  res.json({ message: "Login SuccessFully !!", token });
};

export const getUser = async (req, res) => {
  let users = await User.find();
  res.status(200).send(users);
};

export const getUserId = async (req, res) => {
  let usersId = await User.findById(req.params.id);
  res.status(200).json(usersId);
};

export const deleteUser = async (req, res) => {
  let users = await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User Delete Successfully", users });
};
