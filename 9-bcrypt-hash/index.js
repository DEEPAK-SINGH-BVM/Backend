// what is bcrypt
// => bcrypt is a library use for secure password using hash

// what is bcrypt hash
// => bcrypt.hash it convert in to non-readable format
// after hash password you can't convert in normal format ,one-way.

// what is bcrypt.compare
// => bcrypt.compare is use when you convert password in hash format
// => it compare without convert password in normal format

import bcrypt from "bcrypt";

const password = "12345";

const hashPassword = await bcrypt.hash(password, 10);
console.log("hashPassword:", hashPassword);

// Why use 10 
// Salt rounds tell bcrypt how many times to process the password before generating the hash.
// Lower number → faster hashing → less secure
// Higher number → slower hashing → more secure

const isMatch = await bcrypt.compare("12345", hashPassword);
console.log("Match Password:", isMatch);