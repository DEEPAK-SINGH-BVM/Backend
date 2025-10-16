const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
const PORT = process.env.PORT;
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

// File Size
const uploads = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowTypes = ["image/jpeg", "image/png", "image/gif"];
    // Multipurpose Internet Mail Extensions mime is use for findOut type
    if (!allowTypes.includes(file.mimetype)) {
      return cb(new Error("Invalid file type"), false);
    }
    cb(null, true);
  },
});

// app.post("/uploads", uploads.single("file"), (req, res) => {
//   res.send("File Uploads Successfully ");
// });

// for multiple Images
app.post(
  "/uploadMultipleSingleField",
  uploads.array("multipleFiles", 10),
  (req, res) => {
    // req.files for file as just like as req.body
    console.log(req.files, "Files upload From FrontEnd Side ");
    res.send("File Uploads Successfully !!");
  }
);

app.listen(PORT, () => {
  console.log("Server Start Successfully !!");
});
