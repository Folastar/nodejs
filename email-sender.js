// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'foolong@gmail.com', // Your email
    pass: '' // Your email password
  }
});

// Email options
const mailOptions = {
  from: 'random@gmail.com', //senders email
  to: 'random@gmail.com', // Recipient's email
  subject: 'Hello from Node.js',   //subject of the email
  text: 'Procedures on how to send email message automatically via the use'  //content of the email
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent: ' + info.response);
});
