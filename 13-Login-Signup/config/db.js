import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
  await connect(process.env.MONGO_DB);
  console.log("Connect to Server");
};

export default db;
