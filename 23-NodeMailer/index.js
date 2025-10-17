// const express = require("express");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const app = express();
// app.use(express.json());

// const transporter = nodemailer.createTestAccount({
//   service: "smtp.gmail.com",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.PASS_USER,
//   },
// });

// app.post("/sendEmail", async (req, res) => {
//   const { to, subject, text } = req.body;

//   const mailOption = {
//     form: process.env.EMAIL_USER,
//     to,
//     subject,
//     text,
//   };

//   const info = await transporter.sendMail(mailOption);
//   res.json({ message: "Email Send Successfully !!", info });
// });

// app.listen(8090, () => {
//   console.log("Server Start Successfully !!");
// });
import nodemailer from "nodemailer";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/sendEmail", async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!", info });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
});

app.listen(8010, () => console.log("Server started on port 8010"));
