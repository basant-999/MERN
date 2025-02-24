const express = require("express")
const route = express.Router();
const EmpController = require("../Controller/empController")

route.post("/insert",EmpController.empRegistration)
route.post("/login",EmpController.emplogin)
module.exports = route