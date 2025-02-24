const express = require ("express");
const app = express();
const cors = require("cors");
const bodyparser = require('body-parser')
const StuRoute = require ("./routes/routes");
const mongoose = require("mongoose");

app.use(cors());

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
mongoose.connect("mongodb://127.0.0.1:27017/kushwah").then(()=>{
    console.log("db connected !!!!");
})

app.use ("/students",StuRoute);

app.listen(8080,()=>{
    console.log("server run on port 8080");
})