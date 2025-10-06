const express = require("express");
const db = require("./config/db");
const router = require("./routes/userRoute");
const app = express();

app.use(express.json());

app.use("/", router);
// app.use(router)

app.listen(8090, () => {
  console.log("Server Running !!");
  db();
});
