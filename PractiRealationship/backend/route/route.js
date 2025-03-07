const express = require("express")
const route = express.Router()
const librabryControoler = require("../Controller/bookControoll")

route.post("/datainsert",librabryControoler.datainsert)

module.exports=route
