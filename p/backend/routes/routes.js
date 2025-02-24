const express = require("express");
const route= express.Router();

const StuController = require("../controller/controller");

route.post("/datasave",StuController.dataSave);
route.get("/datadisplay",StuController.dataDisplay);
route.post("/searchdata",StuController.dataSearch);

module.exports=route;
