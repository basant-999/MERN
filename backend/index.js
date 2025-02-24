
const express = require ("express")
const app = express()
const bodyparser=require("body-parser")
const stuRoute = require("./Routes/stuRoute")
const mongoose=require("mongoose");
// ==================================
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
// ===============================

mongoose.connect("mongodb://127.0.0.1:27017/basant").then(()=>{
    console.log("dbconnected!!!") 
})
app.use("/student",stuRoute)
app.listen("8000",()=>{
    console.log("server run on 8080 port ")
})