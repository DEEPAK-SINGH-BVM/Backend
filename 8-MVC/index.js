const express = require("express");
const router = require("./routes/userRoute");
const db = require("./config/db");
const app = express();
app.use(express.json());

app.use("/", router);

app.listen(7050, async () => {
  // async/await ensures the database connects before the server starts accepting requests.
  await db();
  console.log("Server Start Successfully 7050!!");
});
