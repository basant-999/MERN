const mongoose = require ("mongoose")
const ProfileSchema = new mongoose.Schema({
  
    lastname:String,
    firstname:String,
    userid:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    }

})
module.exports = mongoose.model("Profile",ProfileSchema)