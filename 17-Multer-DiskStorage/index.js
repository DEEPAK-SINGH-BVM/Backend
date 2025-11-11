const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
// const path = require("path");
const app = express();
// get Image
app.use("/uploads", express.static("uploads"));
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

// [Filter] File Size
const uploads = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 2024 * 2024,
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

// file is key
app.post("/uploads", uploads.single("file"), (req, res) => {
  res.send("File Uploads Successfully ");
});

// for multiple Images                              // multipleFiles is key
// app.post("/uploadMultipleSingleField",uploads.array("multipleFiles", 10),(req, res) => {
//     res.send("File Uploads Successfully !!");
//     // req.files for file as just like as req.body
//     console.log(req.files, "Files upload From FrontEnd Side ");
//   }
// );

// get Images
app.get("/getMultipleFiles", (req, res) => {
  // folder name that store image
  const folderPath = "uploads";

  try {
    // Read all the files and folders that exist inside the uploads directory` and return them as an array
    const files = fs.readdirSync(folderPath);
    console.log("All Files Exists in Folder", files);
  
    const fileData = files.map((file) => ({
      name: file,
      url: `http://localhost:3000/uploads/${file}`,
    }));

    res.json(fileData);
    console.log("Fetched Uploaded Files Successfully!", fileData);
  } catch (error) {
    console.error("Error reading uploads folder:", error);
    res.status(500).json({ message: "Error fetching files" });
  }
});

// PORT
app.listen(PORT, () => {
  console.log("Server Start Successfully 3000 !!");
});
