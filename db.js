const mongoose = require("mongoose");

const DB="mongodb+srv://fariha:farikausar@cluster0.qhclsnx.mongodb.net/room";
// const DB="mongodb+srv://fariha:farikausar@cluster0.qhclsnx.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(DB).then(()=>{
    console.log("connection successful")
}).catch((err)=>console.log("no connection"))

module.exports= mongoose;



