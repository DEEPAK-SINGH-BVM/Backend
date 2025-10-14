const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
const storage = multer.diskStorage({
  // req = is incoming request
  // file = uploads file info like (name,type)
  // cd = callback function
  destination: (req, file, cb) => {
    // null:no error , 'uploads/ : folder path
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // tell multer to save file save name
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage });
app.post("/uploads", uploads.single("file"), (req, res) => {
  console.log(req.file, "Request File");

  res.send("File Uploads Successfully ");
});

app.listen(PORT, () => {
  console.log("Server Start Successfully !!");
});
