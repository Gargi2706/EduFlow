// const nodemailer = require("nodemailer");

// const sendEmail = async (to, subject, text) => {
//     try{
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS, // app password
//     },
//   });

//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     text,
//   });

//   console.log("Email sent successfully");
//   } catch (error) {
//     console.error("Email could not be sent:", error.message);
//     throw new Error("Email sending failed");
//   }
// };

// module.exports = sendEmail;