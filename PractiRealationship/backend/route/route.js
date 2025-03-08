const express = require("express")
const route = express.Router()
const librabryControoler = require("../Controller/bookControoll")

route.post("/datainsert",librabryControoler.datainsert)
route.get("/datadisplay",librabryControoler.datadisplay)
route.post("/showdata",librabryControoler.showdata)
route.get("/booklib",librabryControoler.libdisplay)
module.exports=route
