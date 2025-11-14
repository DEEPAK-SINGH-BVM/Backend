const express = require("express");
const passport = require("passport");
const router = express.Router();
// get the information that describe in scope
router.get(
  "/auth/google",
  // passport.authenticate inbuilt passport function that automatic redirect to google login page
  passport.authenticate("google", {
    scope: ["profile", "email"],
    // prompt: "select_account", // force google to login page
    prompt:"consent",
    accessType: "offline",
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
    res.send(`Home Page - User Login as ${req.user.displayName} !!`);
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
