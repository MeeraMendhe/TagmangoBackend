const express=require("express")
const router=express.Router()
const nodemailer=require("nodemailer")
const User = require("../models/user.model")

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "3e45fbc5b5ff2e", // generated ethereal user
      pass: "7a5e9d0ccbe8b8", // generated ethereal password
    },
  });
//   let info = {
//     from: '"Meera 👻" <meera9angel@gmail.com', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text text
//     html: "<b>Hello world?</b>", // html body

router.post("/",async(req,res)=>
{
    try{
        const user=await User.create(req.body)
        let data=[]
        data.push(user)
        data = JSON.stringify(data);
        data=JSON.parse(data)
        //console.log(data[0].time)
        if(data[0].time=="now")
        {
            transporter.sendMail(data[0],(e,result)=>
            {
                if(e)
                {
                    console.log("error",e)
                }
                else
                {
                    console.log(result)
                }
            })
        }
        else{
            let time=data[0].time.split(" ")
            let d= new Date()
            let s=d.toString().split(" ")
            let count=0
            if(time[0]==s[1]&& time[1]==s[2]&& time[2]==s[3])
            {
                 let [h1,m1,s1]=time[3].split(":")
                 let [h2,m2,s2]=s[4].split(":")
                 console.log(h1,m1,s1,"----",h2,m2,s2)
                 let id=setTimeout(()=> {
                     setTimeout(()=>{
                        setTimeout(() => {
                            console.log("mail")
                         transporter.sendMail(data[0],(e,result)=>
                         {
                             if(e)
                             {
                                 console.log("error",e)
                             }
                             else
                             {
                                 console.log(result)
                             }
                         })
                        },Math.abs(h1-h2))
                     },Math.abs(m1-m2))
                 },Math.abs(s1-s2)*1000)
                 //clearTimeout(id)
            }
        }
     
       return res.status(200).send(user)
    }
    catch(e)
    {
        return res.status(400).send("Bad requist",e)
    }
})
// let user= {
//     from: "\"Meera 👻\" <meera9angel@gmail.com",
//     to: "bar@example.com, baz@example.com",
//     time: "now",
//     subject: "Hi Love",
//     text: "I love u",
//     _id: "622c403c6907221afdce83f9",
//     __v: 0
// }

module.exports =router