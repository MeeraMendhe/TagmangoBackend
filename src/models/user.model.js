const { default: mongoose } = require("mongoose");

const UserSchema=mongoose.Schema({
      from: {
          type:String,
          default:'"Meera 👻" <meera9angel@gmail.com'
      }, // sender address
      to: 
      { 
          type:String,
          required: true 
      },
      time: { 
          type:String,
          require: true,
          default:"now"
      },
      subject:
      {
          type:String,
          require:true
      },
      text:{ 
          type:String,
          require: true
      }
})

const User=mongoose.model('user',UserSchema)
module.exports=User