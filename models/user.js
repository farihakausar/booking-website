const mongoose=require("mongoose");


const user=mongoose.Schema({
    name: { type: String },
    email:{
        type:String
    },
    password:{
        type:String
    },
    cpassword:{
type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
    
})

const Usermodel=mongoose.model("user",user)

module.exports=Usermodel;