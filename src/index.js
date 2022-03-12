const express=require("express")
const app=express()
const UserController=require("./controllers/user.controller")

app.use(express.json())
app.use("/user",UserController)

module.exports=app