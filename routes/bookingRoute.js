const express=require("express");
const router=express.Router();
const Booking=require("../models/booking")
const Room=require("../models/room")

router.post("/bookroom",async(req,res)=>{
    const{ room,userid,
    fromDate,toDate,totalamount,totaldays}=req.body;
    try {
        const newbooking=new Booking({room:room.name,roomid:room._id,userid,
            fromDate,toDate,totalamount,totaldays,transactionid:"1234"})

            const booking= await newbooking.save();
            const roomTem=await Room.findOne({_id:room._id})
            roomTem.currentbookings.push({bookingid:booking._id,fromDate:fromDate,
                toDate:toDate,userid:userid,status:booking.status})
            await roomTem.save()
            res.send("new bookied succesfully")
            console.log(booking)
    } catch (error) {
        return res.json({error})
    }
})
router.get("/getallbookings",async(req,res)=>{
    try{
        const booking=await Booking.find();
        res.send(booking)
    }catch(err){
        return res.status(400).json({err})
    }
})
router.post('/getbookingsbyuserid',async(req,res)=>{
    const userid=req.body.userid;
    try {
        const bookings= await Booking.find({userid:userid})
        res.send(bookings)
    } catch (error) {
        return res.json({error})
    }
})
router.post("/cancelbooking",async(req,res)=>{
    const{bookingid,roomid}=req.body;
    try {
        const booking1=await Booking.findOne({_id:bookingid})
        booking1.status="cancel"
        await booking1.save()
        const room= await Room.findOne({_id:roomid})
        const bookings=room.currentbookings;
        const tempbookings=bookings.filter(booking=>{booking.bookingid.toString()!==bookingid})
        room.currentbookings=tempbookings;
        await room.save();
        res.send("yopur booking cancel succesfully")
    } catch (error) {
        return res.status(400).json({error})
    }
})
module.exports= router; 