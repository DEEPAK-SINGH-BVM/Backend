// const express = require("express");
// const multer = require("multer");
// const app = express();

// const storage = multer.diskStorage({
//   // folder that image are upload
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   // filename that store
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// // Create a Multer instance to use in routes.
// const upload = multer({ storage: storage });

// app.post("/uploads", upload.single("file"), (req, res) => {
// //   console.log(req.file);
//   res.send("File Uploads Successfully ");
// });

// app.listen(8090, () => {
//   console.log("Server Start Successfully 8090 ");
// });

const express = require("express");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(error, value)
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// destination
const upload = multer({ storage: storage });

// app.post("/uploads", upload.array("file",10), (req, res) => {
//   res.send("File uploads Successfully !!");
// });

app.post("/uploads", upload.single("file", 10), (req, res) => {
  res.send("File uploads Successfully !!");
});

app.listen(8090, () => {
  console.log("Server start 8090");
});
