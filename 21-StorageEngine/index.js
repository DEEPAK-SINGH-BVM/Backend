const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

const customStorage = {
  // tells Multer how to store each uploaded file.
  // like in this store as buffer & name , size
  _handleFile(req, file, cb) {
    // empty array to collection of file
    const chunks = [];
    console.log(chunks, "CHUNKS");
    // COLLECT each file as stream
    file.stream.on("data", (chunk) => chunks.push(chunk));
    // detect when the entire file has finish upload.
    file.stream.on("end", () => {
      cb(null, {
        // file into memory buffer
        buffer: Buffer.concat(chunks),
        // store originalName of file
        originalname: file.originalname,
        // store file size
        size: Buffer.concat(chunks).length,
      });
    });
  },
};

const upload = multer({ storage: customStorage });
// post
app.post("/uploadCustom", upload.single("file"), (req, res) => {
  console.log(req.file, "Files");

  if (!req.file) {
    return res.status(400).json({ message: "File Required" });
  }
  res.send({
    message: "File Upload Successfully !!",
    file: {
      originalname: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype,
    },
  });
});
// get
app.get("/getFile/:filename", (req, res) => {
  // IT JOIN the whole path and provide dir location
  //req.params.filename gets the file name from the URL so the server can locate that specific file

  const filePath = path.join(__dirname, "uploads", req.params.filename);
  console.log(__dirname, "DIR-NAME");

  res.send(filePath);
});

app.listen(PORT, () => {
  console.log("Server Start Successfully !!");
});
