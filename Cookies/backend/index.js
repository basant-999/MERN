const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cookieParser=require("cookie-parser")
const bodyParse = require("body-parser");
require("dotenv").config();
const cors= require("cors");
app.use(cors())
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("sucessfuly db image connected")
})

app.use(cookieParser());
app.get("setcookie",(req,res)=>{
    res.cookie("stuname","basant",{maxAge:60000})
})

app.get("/getcookie",(req,res)=>{
const {stuname} = req.cookie

res.send()
})





// app.use("/library",Routerlibrary)

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})