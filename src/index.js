const express=require("express")
const app=express()
const UserController=require("./controllers/user.controller")
//const nodemailer=require("nodemailer")
// let data=[
//     {
//       from: '"Meera 👻" <meera9angel@gmail.com', // sender address
//       to: "airiddha@tagmango.com, airiddha@tagmango.com",
//       time: "now",
//       subject:"test email ",
//       text:"hey this is test email"
//     },
//     {
//         from: '"Meera 👻" <meera9angel@gmail.com', // sender address
//         to: "airiddha@tagmango.com, airiddha@tagmango.com",
//         time: "1 hour later",
//         subject:"test email ",
//         text:"hey this is test email"
//       }
//       , {
//         from: '"Meera 👻" <meera9angel@gmail.com', // sender address
//         to: "airiddha@tagmango.com, airiddha@tagmango.com",
//         time: "on a particular time( Ex- 21st march,2022,6:00 AM)",
//         subject:"test email ",
//         text:"hey this is test email"
//       },
//       {
//         from: '"Meera 👻" <meera9angel@gmail.com', // sender address
//         to: "debadree@tagmango.com",
//         time: "now",
//         subject:"test email ",
//         text:"hey this is test email"
//       }, {
//         from: '"Meera 👻" <meera9angel@gmail.com', // sender address
//         to: "debadree@tagmango.com",
//         time: "1 hour later",
//         subject:"test email ",
//         text:"hey this is test email"
//       } , {
//         from: '"Meera 👻" <meera9angel@gmail.com', // sender address
//         to: "debadree@tagmango.com",
//         time: "on a particular time( Ex- 21st march,2022,6:00 AM)",
//         subject:"test email ",
//         text:"hey this is test email"
//       },
//     ]
    

// let transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "3e45fbc5b5ff2e", // generated ethereal user
//       pass: "7a5e9d0ccbe8b8", // generated ethereal password
//     },
//   });

//   let info = {
//     from: '"Meera 👻" <meera9angel@gmail.com', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text text
//     html: "<b>Hello world?</b>", // html body
//   };
  

//   transporter.sendMail(info,(e,result)=>
//   {
//       if(e)
//       {
//           console.log(e)
//       }
//       else
//       {
//           console.log(result)
//       }
//   })
// for(let i=0;i<data.length;i++)
// { 
//     transporter.sendMail(data[i],(e,result)=>
//       {
//           if(e)
//           {
//               console.log(e)
//           }
//           else
//           {
//               console.log(result)
//           }
//       })
// }
app.use(express.json())
app.use("/user",UserController)

module.exports=app