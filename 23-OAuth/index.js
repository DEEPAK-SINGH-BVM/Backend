const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./config/passport");
require("dotenv").config()
const authRoute = require("./routes/authRoute");

const app = express();
// store user login information securely so user stay login
app.use(                      
  session({                     
    secret: process.env.SESSION_SECRET,                     
    resave: false,                      
    saveUninitialized: false,                     
  })                      
);                      
// it means start passport so it handle Authentication like (Google)
app.use(passport.initialize());
// connect passport with session , also not require login ever time
app.use(passport.session());

app.use("/", authRoute);

app.listen(5000, () => {
  console.log("Server Start successfully 5000!!");
});
