const cloudModel = require("../model/model")

const useSave=async(req,res)=>{

  const { imagename, name,email,city} = req.body

  const user = await cloudModel.create({
    name:name,
    email:email,
    city:city,
    imgurl:imagename
  })
  res.send(user)
}

const datadisplay=async(req , res)=>{
  const user = await cloudModel.find()
  res.send(user)
}
module.exports={
    useSave,
    datadisplay
}