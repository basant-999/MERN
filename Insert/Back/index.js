const express = require("express")
const App = express();
const mongoose = require("mongoose")
const bodyParse = require("body-parser");
const RouteWorker = require("./route/routes")
const cors= require("cors")
App.use(cors())
App.use(bodyParse.json())
App.use(bodyParse.urlencoded({ extended: true }))
mongoose.connect("mongodb://127.0.0.1:27017/Ajay").then(()=>{
    console.log("sucessfuly connected")
})

// ===========================================

// ======================================================

App.use("/worker",RouteWorker)
App.listen(8000,()=>{
    console.log("server on port 8000")
})