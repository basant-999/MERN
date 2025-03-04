const express = require("express")
const route = express.Router()
const userController = require("../controller/controller")

route.post("/registration",userController.userRegistration)
route.post("/login",userController.userlogin)
route.post("/authentication",userController.Userauthentication)

module.exports=route