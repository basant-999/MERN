const express = require("express")
const app = express()
const mongoose = require("mongoose")
const session = require("express-session")
const bodyParse = require("body-parser");
require("dotenv").config();
const cors= require("cors");
app.use(cors())
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("sucessfuly db image connected")
})


app.use(session({
    secret : "you_seceret_key",
     resave:true,
     saveUninitialized:true
}))

app.get()














// app.use("/library",Routerlibrary)

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})