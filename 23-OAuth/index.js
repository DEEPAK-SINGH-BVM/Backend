const express = require("express");
const session = require("express-session");
// stores user login info in a session so they don’t need to log in every time.
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
    // Don’t save the session again on every request unless something in the session actually changed, to avoid unnecessary updates.
    saveUninitialized: false,
    // Don’t create a session until something is stored in it (like after login), to prevent empty sessions for users who don’t log in.
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
