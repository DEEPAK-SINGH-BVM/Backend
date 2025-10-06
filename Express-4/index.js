// Express
// Express is framework of nodejs , it design for building for web app & API

const express = require("express");
const app = express();
const PORT = 8090;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(PORT, () => {
  console.log("Server Start !!");
});
