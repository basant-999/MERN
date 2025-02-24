const express = require("express")
const route = express.Router()
const BookController = require("../controller/bookController")

route.post("/insert",BookController.Bookinsert)
route.get("/authorshow",BookController.Bookshow)
route.post("/addnewbook",BookController.AddnewBook)

module.exports=route