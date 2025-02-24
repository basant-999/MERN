const usermodel = require("../model/usermodel")
const profilemodel = require("../model/profilemodel")
const datasave=async(req,res)=>{
    const { username, email,firstname, lastname } = req.body
     
    const user = await usermodel.create({
         username:username,
         email:email
    })
  
    const profile = await profilemodel.create({
        firstname:firstname,
        lastname:lastname,
        userid:user._id
    })
    res.send("data save")
}

const dataDisplay=async(req,res)=>{
    const dis = await profilemodel.find().populate("userid")
    console.log(dis)
    res.send(dis)
} 

module.exports={
    datasave,
    dataDisplay
}