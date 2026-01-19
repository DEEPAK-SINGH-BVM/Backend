import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
  const { name, email, password ,role} = req.body;
  
  const hashPassword = await bcrypt.hash(password, 10);
  console.log("hashPassword", hashPassword);
  
  const newUser = await User.create({ name, email, password: hashPassword, role:role?.toLowerCase() || "user" });
  
  const token = jwt.sign(
    { id: newUser._id, name: newUser.name, email: newUser.email ,role:newUser.role},
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  console.log('Signup token',token);
  
  res.status(200).send({ message: "Signup Successfully !!",token });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({ message: "User Not Found Create New Account!!" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  console.log("Password", password);
  console.log("User_Password", user.password);

  if (!isMatch) {
    return res.status(400).send({ message: "Password was Incorrect" });
  }
  const token = jwt.sign(
    { id: user._id, name: user.name, email: user.email ,role:user.role},
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  console.log("token :",token);
  res.status(200).send({ message: "Login Successfully!!", token });
};

export const getAllUser = async (req, res) => {
  let users = await User.find();
  res.status(200).send(users);
};

export const getUser = async (req, res) => {
  // parseInt(string to number ) use to receive data from FrontEnd page,limit from URL
  const page = parseInt(req.query.page) || 1;
  console.log("page", page);
  const limit = parseInt(req.query.limit) || 5;
  console.log("limit", limit);
  //    SKIP     1 - 1 = 0 * 1 = 0
  const skip = (page - 1) * limit;
  console.log("skip", skip);
  const users = await User.find().skip(skip).limit(limit);
  console.log("users", users);
  // countDocument take total number of user from collection
  const totalUsers = await User.countDocuments();
  console.log("totalUser", totalUsers);

   res.status(200).send({
    users,
    totalPages: Math.ceil(totalUsers / limit),
    currentPage: page,
  });

  console.log("Users length:", users.length);
  console.log("Total Pages:", Math.ceil(totalUsers / limit));
  console.log("Current Page:", page);
};

export const getUserId = async (req, res) => {
  let usersId = await User.findById(req.params.id);
  res.status(200).json(usersId);
};

export const updateUser = async (req,res)=>{
  let users = await User.findByIdAndUpdate(req.params.id,req.body);
  res.status(200).json({message:"User Update Successfully",users})
}

export const deleteUser = async (req, res) => {
  let users = await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User Delete Successfully", users });
};


// export const signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   const hashPassword = await bcrypt.hash(password, 10);

//   await User.create({ name, email, password: hashPassword });

//   res.status(200).send({ message: "Signup Successfully !!" });
// };

// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (!user) {
//     return res.status(400).send({ message: "Invalid Email Address" });
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return res.status(400).send({ message: "Invalid Password !!" });
//   }

//   const token = jwt.sign(
//     { id: user._id, name: user.name, email: user.email },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "24h",
//     }
//   );

//   console.log(token, "tokennnnnnnnnnnnn");

//   res.json({ message: "Login SuccessFully !!", token });
// };


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
