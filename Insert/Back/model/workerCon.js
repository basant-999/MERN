const mongoose = require ("mongoose")
const Schema = new mongoose.Schema({
    name:String,
    city:String,
    address:String
})
module.exports = mongoose.model("worker",Schema)