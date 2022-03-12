const { default: mongoose } = require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://MeeraMendhe:kingangel@cluster0.4maw9.mongodb.net/tagmango")
}
module.exports=connect