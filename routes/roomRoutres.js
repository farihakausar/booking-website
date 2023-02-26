const express=require("express");
const router=express.Router();

const Room=require("../models/room");

router.get("/getallrooms",async(req,res)=>{
try{
    const rooms=await Room.find({});
    res.send(rooms);
}catch(error){
    res.status(400).json({msg:error})
}
})
router.post("/getroombyid/:roomid",async(req,res)=>{
    // const roomid=req.body.roomid;
    const roomid=req.params;
    try{
        const room=await Room.findOne({_id:roomid.roomid});
        // const room=await Room.findOne({_id:roomid});
        res.send(room);
        console.log(room)
    }catch(error){
        res.status(400).json({msg:error})
    }
    })

    router.post("/addroom",async(req,res)=>{
        try {
            const newroom=new Room(req.body)
            await newroom.save();
            res.send("new room addd succesfully")
        } catch (error) {
            return res.status(400).json({error})
        }
    })
module.exports=router;