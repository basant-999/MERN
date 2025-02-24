const mongoose = require("mongoose")
const empSchema=new mongoose.Schema({
    name:String,
    city:String,
    address:String,
    salary:Number

})

module.exports=mongoose.model("employee",empSchema)