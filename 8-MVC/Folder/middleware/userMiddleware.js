
function userValidation(req ,res, next){
    const {name , email ,password} = req.body;

    if(!name ){
        return res.status(400).send('Name is required');
    }

    if(!email){
        return res.status(400).send("Email Required")
    }

    if (password.length < 6) {
      return res.status(400).send("Apply strong password !!");
    }
    next();
}

module.exports = userValidation;