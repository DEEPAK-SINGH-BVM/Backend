const express = require("express");
const routerPost = require("./routes/postRoutes");
const db = require("./config/db");
const routerUser = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/post", routerPost);
app.use("/user", routerUser);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  db();
  console.log("Server Start Successfully !!");
});
