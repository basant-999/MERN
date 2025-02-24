const express = require("express")
const app = express()
const bodyParse = require("body-parser")
const cors= require("cors")
app.use(cors())
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))




// app.use((req,res,next)=>{
//     console.log("first midddleweare")    //app lavel middle weare
//     next()
// })
//===========================================================================st1

app.get("/homepage", (req,res,next)=>{
         console.log("this is path level middle weare")
         next()
},(req,res)=>{
    console.log("my home page")
    res.send("home page data")  
})
//========================================================
app.get("/about", (req,res)=>{
    console.log("myabout page")
    res.send("about page data")  
})
 //=================================================
app.get("/service",(req,res,next)=>{
       console.log("service first middele weare")
       next()
},(req,res,next)=>{
    console.log("service first middele weare")
    next()
},(req,res)=>{
    console.log("myservice page")
    res.send("server page data")  
})



app.listen(8090,()=>{
    console.log("server run on port 8090")
})