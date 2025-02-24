const express = require("express");  //first step
const app = express();
const bodyParser=require("body-parser")

//===========================================
const mongoose = require("mongoose")
require("dotenv").config()
//=====================================
const Emproute = require("./Routes/empRoute")
const cors = require("cors");
app.use(cors())
//=======================================================

app.use(bodyParser.urlencoded({ extended: true }))  //key dekhne ke liye
app.use(bodyParser.json())
//======================================================
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("db connection strong")
})

const port = process.env.PORT
app.use("/employee",Emproute)

app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})