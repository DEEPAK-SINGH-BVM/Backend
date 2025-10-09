import express from "express";
import router from "./routes/userRoutes.js";
import db from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

app.use("/", router);

const PORT = process.env.PORT || 7060;

app.listen(PORT, () => {
  console.log("Server Start Successfully !!");
  db();
});
