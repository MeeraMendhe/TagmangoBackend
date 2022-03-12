const express=require("express")
const app=express()
const nodemailer=require("nodemailer")


let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "3e45fbc5b5ff2e", // generated ethereal user
      pass: "7a5e9d0ccbe8b8", // generated ethereal password
    },
  });

  let info = {
    from: '"Meera 👻" <meera9angel@gmail.com', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };
  

  transporter.sendMail(info,(e,result)=>
  {
      if(e)
      {
          console.log(e)
      }
      else
      {
          console.log(result)
      }
  })
app.use(express.json())

module.exports=app