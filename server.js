const express=require("express");
const app=express();
const dbConfig=require("./db")
const port=process.env.PORT||5000;
const rooms=require("./routes/roomRoutres")
const users=require("./routes/userRouter")
const bookings=require("./routes/bookingRoute")


app.use(express.json())
app.use("/api/rooms",rooms);
app.use("/api/users",users);
app.use("/api/bookings",bookings);



app.listen(5000,()=>{
    console.log(`serverr is lientimg to ${port} `);
})