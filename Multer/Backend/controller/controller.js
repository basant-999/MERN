const Multermodel = require("../model/model")

const datainsert=async(req,res)=>{
    const {rollno,name,city} = req.body
    const myimg = req.file.filename
     
  const User= await Multermodel.create({
    rollno:rollno,
    name:name,
    city: city,
    image:myimg
  })
    res.send("llllllllll")
}

const datadisplay=async(req,res)=>{
  const user = await Multermodel.find()
  res.send(user)

}

module.exports={
    datainsert,
    datadisplay
}