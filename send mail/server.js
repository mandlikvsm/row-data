import express from 'express'
import 'dotenv/config'
import nodemailer from 'nodemailer'

const app = express();
const port = 5000;

app.use(express.json());

const transport = nodemailer.createTransport({

    service:"gmail",
    auth: {
        user:process.env.AUTH_EMAIL,
        pass:process.env.AUTH_PASS
    }


})

transport.verify((error,success) =>{
    if(error){
        console.log(error);
    }
    else{
        console.log(`Ready for send mail`);
        console.log(success);
    }
})

app.post("/sendmail", (req,res) =>{
    const {to, subject, message} = req.body;

    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: to,
        subject:subject,
        text:message
    }

    transport.sendMail(mailOptions)
.then(() =>{
    res.json({
        status:"Success",
        message: "Message sent successfully"
    })
})
.catch((error) => {
    console.log(error);
    res.json({status: "FAILED", message: "An error occured!"});
})

})






app.listen(port, () =>{
    console.log(`Server running on ${port}`);
    console.log(`welcome`);

})

app.get('/', (req,res) => {

    transport.sendMail({
        from:'mandlikvs@gmail.com',
        to:'mandlikvs@gmail.com',
        subject:'testing',
        text:'Hello'
    })
    .then(() =>{
        res.json({
            status:"Success",
            message: "Message sent successfully"
        })
    })
    // res.send(`<h1>welcome to send email demo</h1>`);
})


