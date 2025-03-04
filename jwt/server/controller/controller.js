
const userModel = require("../model/model")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userRegistration=async(req,res)=>{
    const{name,email,password} = req.body

    const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(password,salt)
    const user = await userModel.create({
        name:name,
        email:email,
        password:hashPassword
    })
    res.send("all right")
}

const userlogin =async(req,res)=>{
   
    const {email,password} = req.body
    const user= await userModel.findOne({email:email})

    if(!user)
    {
        res.send("invalid email!!!!")
    }
    const passwordmatch = await bcrypt.compare(password,user.password)
    if(!passwordmatch)
    {
        res.send("invalid passward")
    }
    const token = await jwt.sign({id:user._id},process.env.SECRETE_KEY,{expiresIn:"7 days"})
    console.log(token)
    res.send({token:token})
}

const Userauthentication=async(req,res)=>{
const token = req.header("x-auth-token")
console.log(token)

const verify = await jwt.verify(token,process.env.SECRETE_KEY)
console.log(verify)

const user = await userModel.findById(verify.id).select("-password")

res.send(user)
}
module.exports={
    userRegistration,
    userlogin,
    Userauthentication
}