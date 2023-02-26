const mongoose=require("mongoose");

const roomSchema=mongoose.Schema({
    name:{
        type:String
       
    },
    maxcount:{
        type:Number,
        
    },
    phonenumber:{
        type:Number,
        
    },
    imageurls:[],
    rentperday:{
        type:Number,
        
    },
    currentbookings:[],
    type:{String,
    
    },
    description:{
        type:String,
        
    }
})
const roomMod=mongoose.model("room",roomSchema);


module.exports=roomMod;