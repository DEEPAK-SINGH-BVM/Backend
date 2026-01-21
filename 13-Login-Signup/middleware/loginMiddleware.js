
async function loginMiddleware(req, res, next) {
  const {email } = req.body;

  if (!email) {
    return res
      .status(400)
      .send({ message: "All Fields Required Compulsory !!" });
  }
  next();
}

export default loginMiddleware;
