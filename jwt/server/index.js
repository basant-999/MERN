const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Routerjwt = require("./route/userrout")
const bodyParse = require("body-parser");
require("dotenv").config();
const cors= require("cors")
app.use(cors())
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("sucessfuly connected")
})

app.use("/user",Routerjwt)

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})