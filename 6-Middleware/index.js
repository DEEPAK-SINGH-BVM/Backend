//   Middleware
// => middleware is provide way to add & refuse common functionality across the application
// => it can end & modified of request response cycle also call next middleware
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1 ");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("ABC");
});



app.listen(7030, () => {
  console.log("Server running Successfully 7030!!");
});
