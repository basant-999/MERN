const express = require ("express");
const route = express.Router()
const ControllerWork=require("../controller/conter")

route.post("/about",ControllerWork.workInsert)
route.get("/contact",ControllerWork.workDisplay)
route.post("/search",ControllerWork.workSearch)
route.get("/workdelete",ControllerWork.workDelete)
route.post("/editdatashow",ControllerWork.workEditShow)
route.post("/editdatasave",ControllerWork.workEditsave)
module.exports=route