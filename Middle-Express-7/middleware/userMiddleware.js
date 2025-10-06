function userValidation(req, res, next) {
  const { name, email, password } = req.body;

  if (!name || name.length < 3) {
    return res.status(400).send("User Name Required");
  }

  if (!email || !email.includes("@")) {
    return res.status(400).send("Valid Email Required ");
  }

  if (!password || password.length < 6) {
    return res.status(400).send("Password Must Strong ");
  }
  next();
}

module.exports = userValidation;
