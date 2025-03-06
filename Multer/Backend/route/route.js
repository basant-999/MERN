const express = require("express")
const route = express.Router()
const Multercontroller = require("../controller/controller")
const multer = require("multer")


const storage=  multer.diskStorage({
    destination: (req, file, cb)=>{
     cb(null, 'upload/'); // Save files to uploads directory
    },      
    filename:(req, file, cb)=>{
     cb(null, Date.now()+"-"+file.originalname); // Keep original file name
    }  
})


const uploading = multer({ storage: storage });

route.post("/datainsert",uploading.single("image"), Multercontroller.datainsert)
route.get("/datadisplay",Multercontroller.datadisplay)
module.exports=route