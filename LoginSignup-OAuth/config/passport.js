// For authentication, the passport library makes it easier to login users in using various methods (such as Google, Facebook, GitHub, JWT, etc.).
const passport = require("passport");
const User = require("../model/user");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
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
    async (accessToken, refreshToken, profile, done) => {
      console.log("accessToken :", accessToken);
      console.log("refreshToken :", refreshToken);
      console.log("User Profile :", profile);

      try {
        

        const email = profile.emails[0].value;

        let user = await User.findOne({ email });

        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: email,
            googleId: profile.id,
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
// serializeUser save user information after login
passport.serializeUser((user, done) => {
  done(null, user._id);
  console.log("user details", user);
});

// Restore (deserialize) → when the user visits another page, Passport checks the session, finds the saved user, and keeps them logged in automatically.
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
