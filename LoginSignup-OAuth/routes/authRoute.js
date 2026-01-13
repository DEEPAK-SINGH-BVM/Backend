const express = require("express");
const passport = require("passport");
const router = express.Router();

// Redirects user to Google login and asks for profile & email
router.get(
  "/auth/google",
  // passport.authenticate inbuilt passport function that automatic redirect to google login page
  passport.authenticate("google", {
    scope: ["profile", "email"],
    // Ask Google for user’s name, photo, and email
    prompt: "consent",
    // To make sure Google gives fresh permission and provides a refresh token when needed.
    accessType: "offline",
    // When a user logs in today, the access token may expire tomorrow. Using this option, your app can automatically get a new token without requiring the user to log in again. This avoids asking the user to log in every day.
  })
);

// when authentication was fail then it redirect to login page if we exists on login page it simply refresh page
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" ,session:true}),
  (req, res) => {
    // res.redirect("/");
    res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
  }
);

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
