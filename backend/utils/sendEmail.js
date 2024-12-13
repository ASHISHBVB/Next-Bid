import nodemailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // TLS port
    secure: false, // Must be false for TLS
    requireTLS: true, // Enforces TLS connection
    auth: {
      user: process.env.GMAIL_USER, // Gmail account
      pass: process.env.GMAIL_APP_PASSWORD, // App Password for Gmail
    },
  });

  const options = {
    from: `"Jayesh's Auction Team" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(options);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};








// import nodemailer from "nodemailer";

// import { AppConfig } from "../config/env.config.js";


// export const sendEmail = async ({ email, subject, message }) => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587, // TLS port
//     secure: false, // Must be false for TLS
//     requireTLS: true, // Enforces TLS connection
//     auth: {
//       user: AppConfig.GOOGLE_APP.EMAIL_ID,
//       pass: AppConfig.GOOGLE_APP.PASS_KEY
//     }
//   });

//   const options = {
//     from: AppConfig.GOOGLE_APP.EMAIL_ID, 
//     to: email,
//     subject: subject,
//     text: message,
//   };

//   try {
//     const response = await transporter.sendMail(options);
//     console.log("Email sent successfully", response);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// // sendEmail({ email: "spykii8888@gmail.com", subject: "test", message: "did you receive this message?" })


// // import nodeMailer from "nodemailer";

// // export const sendEmail = async ({ email, subject, message }) => {
// //   const transporter = nodeMailer.createTransport({
// //     host: process.env.SMTP_HOST,
// //     port: process.env.SMTP_PORT,
// //     service: process.env.SMTP_SERVICE,
// //     auth: {
// //       user: process.env.SMTP_MAIL,
// //       pass: process.env.SMTP_PASSWORD,
// //     },
// //   });
// //   const options = {
// //     from: process.env.SMTP_MAIL,
// //     to: email,
// //     subject: subject,
// //     text: message,
// //   };
// //   await transporter.sendMail(options);
// // };
