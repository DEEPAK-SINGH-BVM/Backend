// const express = require("express");
// const db = require("./config/db");
// const router = require("./routes/userRoute");
// const app = express();

// app.use(express.json());

// app.use("/", router);
// // app.use(router)

// app.listen(7050, () => {
//   console.log("Server Running 7050!!");
//   db();
// });

const express = require("express");
const router = require("./routes/userRoute");
const db = require("./config/db");
const app = express();
app.use(express.json());

app.use("/", router);

app.listen(7050, () => {
  db();
  console.log("Server Start Successfully 7050!!");
});
