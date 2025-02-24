const express = require("express")
const route = express.Router()

const Usercontroller = require("../controller/controller")

route.post("/insert",Usercontroller.datasave)
route.get("/display",Usercontroller.dataDisplay)

module.exports = route