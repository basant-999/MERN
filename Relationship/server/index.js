const express = require("express")
const App = express();
const mongoose = require("mongoose")
const bodyParse = require("body-parser");
const UserRoute = require("./routes/route")
const cors= require("cors")
App.use(cors())
App.use(bodyParse.json())
App.use(bodyParse.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/Relation").then(()=>{
    console.log("db connect")
})

// ===========================================

// ======================================================

App.use("/user",UserRoute)
App.listen(8080,()=>{
    console.log("server on port 8080")
})