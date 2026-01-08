// const express = require("express");
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const cors = require("cors");
// const app = express();
// const fs = require("fs");

// app.use(express.json());
// app.use(cors());
// require("dotenv").config();
// const PORT = process.env.PORT;

// // cloud_name , api_key , api_secret
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // setup multer for file Uploads
// // tells Multer to store uploaded files temporarily in RAM (memory) instead of saving them on disk.
// // We use middleware (Multer) so the file can be read and converted into a buffer, which is then sent to Cloudinary.
// const storage = multer.memoryStorage();
// // sets up Multer middleware that will use that memory storage when handling file uploads.
// const upload = multer({ storage });
// // get
// app.get("/Images", async (req, res) => {
//   // this is api method that fetch resource from your cloudinary account
//   try {
//     const result = await cloudinary.api.resources({
//       // it tell Cloudinary only get files form upload
//       type: "upload",
//     });
//     console.log('Result',result);

//     // result.resources is built-in and holds all uploaded files so we can get their URLs and IDs easily.
//     const images = result.resources.map((img) => ({
//       // unique id for each image
//       public_id: img.public_id,
//       // get the direct HTTPS link to the uploaded image.
//       url: img.secure_url,
//       //
//     }));
//     console.log("IMAGE", images);
//     res.json(images);
//   } catch (error) {
//     console.log("Error in Image Uploading !!", error);
//   }
// });

// // post
// app.post("/Uploads", upload.single("image"), (req, res) => {
//   console.log(req.file, "FILES");

//   if (!req.file) {
//     return res.status(400).json({ message: "File Required" });
//   }
//   // fs structure
//   fs.writeFileSync("Buffer", req.file.buffer);
//   console.log("File Written to disk as test.png");

//   // upload file memory buffer to cloudinary without saving it's on disk
//   cloudinary.uploader
//      //upload_stream() uploads the file directly from memory (buffer) to Cloudinary.
//     .upload_stream(
//       // for automatic detect file type
//       { resource_type: "auto" },
//       // result , error
//       (error, result) => {
//         if (error) {
//           console.log(error);
//           return res
//             .status(500)
//             .json({ message: "Error Uploading to cloudinary" });
//         }
//         // provide by Cloudinary after image upload successfully
//         res.json({ public_id: result.public_id, url: result.secure_url });
//       }
//     ) // raw binary data
//      // The .end(req.file.buffer) is used to send the image data (buffer) into the upload stream so Cloudinary can process and upload it.
//     .end(req.file.buffer);
// });

// app.listen(PORT, () => {
//   console.log(`Server Start Successfully ${PORT}`);
// });

const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const app = express();
const fs = require("fs");

app.use(express.json());
const PORT = process.env.PORT;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();

const upload = multer({ storage });

app.get("/image", async (req, res) => {
  const result = await cloudinary.api.resources({
    type: "upload",
  });

  const image = result.resources.map((img) => ({
    public_id: img.public_id,
    url: img.secure_url,
  }));

  console.log("Image", image);
  res.json(image);
});

app.post("/uploads", upload.single("image"), (req, res) => {
  fs.writeFileSync("temp.png", req.file.buffer);
  cloudinary.uploader
    .upload_stream({ resource_type: "auto" }, (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Error in Upload Image" });
      }
      res.json({ public_id: result.public_id, url: result.secure_url });
    })
    .end(req.file.buffer);
});

app.listen(8000, () => {
  console.log("New Server Start Successfully ");
});
