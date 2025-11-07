// what is JWT
// => JsonWebToken is use for convert user data into token format for store in cookies
import jwt from "jsonwebtoken";
// payload is normal data format
const payload = { id: "1", role: "admin" };
// secret key
const secret = "abcd1234";
// jwt.sign take , payload , secret , option and convert into token format
const token = jwt.sign(payload, secret, { expiresIn: "24h" });
console.log("TOKEN :", token);

// jwt.verify take token(token format data ) and secret key if both are make secret key then it convert into normal format
const decode = jwt.verify(token, secret);
console.log("DECODE :", decode);
