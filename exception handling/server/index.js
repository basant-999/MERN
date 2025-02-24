const express = require("express")
const app = express()
const bodyParse = require("body-parser")
const cors= require("cors")
app.use(cors())
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))


app.get("/homepage",(req,res)=>{
   try {
   console.log("welcome to home page")
    throw new Error("home error")
   res.status(200).send("home data")

   } catch (error) {
    
    res.status(400).send({msg:"server not connect with database"})
   }
})



app.listen(8090,()=>{
    console.log("server run on port 8090")
})