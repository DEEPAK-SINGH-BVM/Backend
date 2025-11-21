const nodemailer = require("nodemailer");
const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

// create a connection to gmail service by using user,pass
const transporter = nodemailer.createTransport({
  service: "gmail",
  // auth: {
  //   user: "deepaksingh.bvminfotech@gmail.com",
  //   pass: "aewasceoosgevtxi",
  // },
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.PASS_USER,
  },
});

// for sending Images , PDF
const storage = multer.diskStorage({
  // this is destination of that folder to store file
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  // for originalname
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Creates a Multer object to handle file uploads
const Upload = multer({ storage });

app.post("/sendEmail", Upload.array("files"), async (req, res) => {
  console.log("Request Body", req.body);

  try {
    const { to, subject, text } = req.body;

    // const attachments = req.files.map((file) => ({
    //   filename: file.originalname,
    //   path: file.path,
    // }));

    const attachments = req.files.map((file) => {
      console.log("File-Original Name", file.originalname);
      console.log("File-Path", file.path);
      
      return {
        filename: file.originalname,
        path: file.path,
      };
    });

    // console.log("sending email to ", to);
    // console.log("mail subject", subject);
    // console.log("text", text);

    // to mail address and there subjects
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      attachments,
    };
    console.log("step 5 MailOption", mailOptions);

    // this is the main function that send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email send successfully", info);

    res.json({ message: "Email send successfully!", info });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
});

app.listen(8010, () => {
  console.log("Server Started Successfully started on port 8010");
});
