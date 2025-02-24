const Empmodel = require("../Model/model")
const empRegistration = async(req,res)=>{
 console.log(req.body)

 const{name,city,address,salary} = req.body
 try {
    const ans = await Empmodel.create({
        name,city,address,salary
     })
     res.status(200).json({msg:"you are register"})
 } catch (error) {
    console.log(error)
 }
}

const emplogin=async(req,res)=>{
    const {name,city} = req.body
     console.log(req.body)
     try {
        const Employ= await Empmodel.findOne({city:city})
        if(!Employ){
            res.status(400).send({msg:"invalid city"})
        }
        if(Employ.name!==name){
            res.status(400).send({msg:"invalid name"})
        }

        res.status(200).send(Employ)

     } catch (error) {
        console.log(error)
     }

}

module.exports={
    empRegistration,
    emplogin
}