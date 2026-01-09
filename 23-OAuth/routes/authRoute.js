const express = require("express");
const passport = require("passport");
const router = express.Router();
// get the information that describe in scope
router.get("/auth/google",
  // passport.authenticate inbuilt passport function that automatic redirect to google login page
  passport.authenticate("google", {
    scope: ["profile", "email"],
    // Ask Google for user’s name, photo, and email
    prompt: "consent",
    // It simply checks if the user is already logged in. If a valid session or token exists, Google does not show the login page and redirects directly to the home page.
    accessType: "offline",
    // When a user logs in today, the access token may expire tomorrow. Using this option, your app can automatically get a new token without requiring the user to log in again. This avoids asking the user to log in every day.
  })
);

// when authentication was fail then it redirect to login page if we exists on login page it simply refresh page
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);
//
router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    // “Returns true when a logged‑in user exists (session active), otherwise false.
    res.send(`Home Page - User Login as ${req.user.displayName} !!`);
    console.log("isAuthenticated", req.isAuthenticated());
  } else {
    res.send("Home Page User Not Login !!");
  }
});
//
router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
