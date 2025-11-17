// For authentication, the passport library makes it easier to log users in using various methods (such as Google, Facebook, GitHub, JWT, etc.).
require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// GoogleStrategy is use for login to google platform , if you want to login in FaceBook so you need to import passport-FaceBook

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    // These 4 parameters are provided by Google:
    // accessToken – token to access Google data (like email, profile)
    // refreshToken – gives a new token after the old one expires
    // profile – stores user’s Google account data
    // done – callback function that tells Passport authentication is complete
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken :", accessToken);
      console.log("refreshToken :", refreshToken);
      console.log("User Profile :", profile);
      return done(null, profile);
    }
  )
);
// serializeUser save user information after login
passport.serializeUser((user, done) => {
  done(null, user);
});

// Restore (deserialize) → when the user visits another page, Passport checks the session, finds the saved user, and keeps them logged in automatically.
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Example to Understand Easy
// 1 First login (serializeUser) →
// You log in with Google → Passport saves your user info (like ID or token) in the session or cookie.

// 2 Next visit / refresh (deserializeUser) →
// When you reload or reopen the site, Passport reads that saved info and automatically logs you in again — no need to re-enter details.
