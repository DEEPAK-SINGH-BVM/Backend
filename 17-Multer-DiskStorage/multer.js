const express = require("express");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// destination
const upload = multer({ storage: storage });

app.post("/uploads", upload.single("file"), (req, res) => {
//   console.log(req.file);
  res.send("File Uploads Successfully ");
});

app.listen(8090, () => {
  console.log("Server Start Successfully ");
});
