const express = require ("express")
const app =  express()
const bodyParse = require("body-parser")
const Routerbook = require("./routes/bookRoute")
const cors= require("cors")
const  mongoose = require("mongoose")
app.use(cors())
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/manyrealy").then(()=>{
    console.log("data conected!!!!!!!!!!")
})

app.use("/account",Routerbook)
app.listen(8000,()=>{
    console.log("server run on port 8000")
})