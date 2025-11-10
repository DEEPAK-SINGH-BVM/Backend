const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;

// cloud_name , api_key , api_secret
cloudinary.config({
  cloud_name: "dxspojktn",
  api_key: "133363368185699",
  api_secret: "brt4YzrpLJs_b7QtaIHBZ2n-yOQ",
  // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET,
});

// setup multer for file Uploads
// tells Multer to store uploaded files temporarily in RAM (memory) instead of saving them on disk.
const storage = multer.memoryStorage();
// sets up Multer middleware that will use that memory storage when handling file uploads.
const upload = multer({ storage });
// get
app.get("/", async (req, res) => {
  // this is api method that fetch resource from your cloudinary account
  try {
    const result = await cloudinary.api.resources({
      // it tell Cloudinary only get files form upload
      type: "upload",
    });
    // result.resources is built-in and holds all uploaded files so we can get their URLs and IDs easily.
    const images = result.resources.map((img) => ({
      // unique id for each image
      public_id: img.public_id,
      // get the direct HTTPS link to the uploaded image.
      url: img.secure_url,
      //
    }));
    console.log("IMAGE", images);
    res.json(images);
  } catch (error) {
    console.log("Error in Image Uploading !!", error);
  }
});

// post
app.post("/", upload.single("image"), (req, res) => {
  console.log(req.file, "FILES");

  if (!req.file) {
    return res.status(400).json({ message: "File Required" });
  }
  // fs structure
  fs.writeFileSync("test.png", req.file.buffer);
  console.log("File Written to disk as test.png");

  // upload file memory buffer to cloudinary without saving it's on disk
  cloudinary.uploader
    .upload_stream(
      // for automatic detect file type
      { resource_type: "auto" },
      // result , error
      (error, result) => {
        if (error) {
          console.log(error);
          return res
            .status(500)
            .json({ message: "Error Uploading to cloudinary" });
        }
        // provide by Cloudinary after image upload successfully
        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    ) // raw binary data
    .end(req.file.buffer);
});

app.listen(PORT, () => {
  console.log(`Server Start Successfully ${PORT}`);
});
