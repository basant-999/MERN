
const dataModel = require("../model/model")

const datasave=async(req,res)=>{
    const imageurls = req.files.map(file=>file.path)
    const {name,brand,price} = req.body
    const defaultimage = imageurls[0]
    const prodcu = await dataModel.create({
        name:name,
        brand:brand,
        price: price,
       defaultimage:defaultimage,
       images:imageurls
    })
    console.log(imageurls)
    console.log(req.files)
    console.log(req.body)
    res.send("good bk")
    
   }

   const datadisplay =async(req,res)=>{
    const data= await dataModel.find()
    res.send(data)
   }

   const showdata=async(req,res)=>{
    const{id} = req.body
    const user = await dataModel.findById(id)
     console.log(user)
     console.log(req.body)
        res.send(user)
   }

module.exports={
    datasave,
    datadisplay,
    showdata
}
