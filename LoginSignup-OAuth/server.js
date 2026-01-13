const express = require("express");
const session = require("express-session");
// session stores user login info in a session so they don’t need to log in every time.
const passport = require("passport");
const cors = require("cors");
// Passport checks the user’s identity (Google login) and handles login and logout.
require("./config/passport");
require("dotenv").config();
const userRoute = require("./routes/userRoute")
const authRoute = require("./routes/authRoute");
const  db  = require("./config/db");
const app = express();
app.use(express.json());
const PORT = process.env.PORT

app.use(cors({ origin: "http://localhost:5173", credentials:true }));
// store user login information securely so user stay login
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    // Don’t save the session again on every request unless something in the session actually changed, to avoid unnecessary updates.
    saveUninitialized: false,
    // Don’t create a session until something is stored in it (like after login), to prevent empty sessions for users who don’t log in.
    cookie: { secure: false },
  })
);
// it means start passport so it handle Authentication like (Google)
app.use(passport.initialize());
// connect passport with session , also not require login ever time
app.use(passport.session());

app.use("/", userRoute);
app.use("/", authRoute);

// async/await To make sure the database connects before the app starts handling requests.
app.listen(PORT,async () => {
    await db();
  console.log(`Server Start successfully !! ${PORT}`);
});
