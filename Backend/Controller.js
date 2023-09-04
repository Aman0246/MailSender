const nodemailer = require("nodemailer");
require("dotenv").config();
const sendemailController = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER,
      pass: process.env.PASS
    },
  });

  let details = {
    from: process.env.SENDER,
    to: "amankashyap0246@gmail.com",
    subject: "checking",
    text: 'sadsadsadsa',
  };

  transporter.sendMail(details, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Email sent");
    }
  });
};

module.exports = { sendemailController };
