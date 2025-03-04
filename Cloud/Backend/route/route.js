const express = require("express")
const route = express.Router()

const Cloudcontroller = require("../controller/controller")

route.post("/datasave",Cloudcontroller.useSave)
route.get("/datadisplay",Cloudcontroller.datadisplay)

module.exports=route