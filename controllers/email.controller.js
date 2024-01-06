"use strict";
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_SECRET,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(req, res) {
    console.log(JSON.stringify(req.body));
    const reqBody = req.body;
    // const emailText = `Name : ${reqBody.txiName} Email: ${reqBody.txiEmail} Phone: ${reqBody.txiPhone} CheckDate: ${reqBody.check_date} Adults: ${reqBody.txiAdults} Children: ${reqBody.txiChildren} Query: ${reqBody.txaQuery}`;
    const emailText = `Name : ${reqBody.name} Phone: ${reqBody.phone} Message: ${reqBody.message}`;
//   console.log(emailText);
  //  send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.GMAIL_USER, // sender address
    to: "contact@hookatrip.com", // list of receivers
    subject: "New Query from hookatrip landing page", // Subject line
    text: emailText, // plain text body
  });

  console.log(`Message sent for text ${emailText}`);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
  setTimeout( () => {
    res.status(200).json({
        message: "Success"
      }), 2000
  })
}

// main().catch(console.error);

module.exports = {
    main
}