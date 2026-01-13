const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
require("dotenv").config();

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.PASS_USER_NEW,
  },
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Uploads = multer({ storage });

app.post("/sendEmail", Uploads.array("files"), async (req, res) => {
  const attachments = req.files.map((file) => {
    console.log("File Name :", file.originalname);
    console.log("File path :", file.path);
    return {    
      filename: file.originalname,
      path: file.path,
    };
  });

  console.log("attachments", attachments);

  const { to, subject, text } = req.body;

  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("Text:", text);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    attachments,
  };
  console.log("mailOption", mailOptions);

  const info = await transporter.sendMail(mailOptions);
  res.json({ message: "Email send Successfully ", info });
});

app.listen(8010, () => {
  console.log("Server start Successfully");
});
