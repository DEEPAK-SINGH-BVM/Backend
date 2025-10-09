const express = require("express");
const router = require("./routes/userRoutes");
const db = require("./config/db");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

app.use("/", router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server start Successfully ");
  db();
});
