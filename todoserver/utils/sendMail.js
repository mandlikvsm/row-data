import { createTransport } from "nodemailer";
import 'dotenv/config'

export const sendMail = async (email, subject, text) => {

  const transport = createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },

  });

  await transport.verify((error, success) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log(`Ready to send mail`);
     
    }
  })


  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: subject,
    text: text
  }

 await transport.sendMail(mailOptions)
    .then(() => {
     console.log(`mail sent successfully`)
    })
    .catch((error) => {
      console.log(error);
      
    })



};