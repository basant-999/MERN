const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({ 
     name:String,
     brand:String,
     price: Number,
    defaultimage:String,
    images:[String]
})

module.exports = mongoose.model("multipaleimage", userSchema);