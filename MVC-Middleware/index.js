const express = require("express");
const router = require("./routes/productRoutes");
const db = require("./config/db");
const app = express();
app.use(express.json());

app.use("/", router);

app.listen(9090, () => {
  console.log("Server Start Successfully !!");
  db();
});
