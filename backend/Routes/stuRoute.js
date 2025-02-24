const express = require("express")

const route = express.Router()
const stuController=require("../Controller/stuController")

route.get("/home",stuController.stuHome)
route.get("/insert",stuController.stuInsert)
route.get("/display",stuController.stuDisplay)
route.post("/save",stuController.stuSave)

module.exports=route