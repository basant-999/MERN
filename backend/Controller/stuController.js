
const stuModel = require("../model/stuModel")
const stumodel = require("../model/stuModel")



const stuHome = (req,res)=>{
    res.render("home")
}

const stuInsert = (req,res)=>{
    res.render("insert")
}
const stuDisplay =async (req,res)=>{
    const Data = await stumodel.find();
    res.render("display",{basant:Data})
}
const stuSave=async(req,res)=>{
    // console.log(req.body)
    // console.log("okkkk");
    // res.send("okk")
    const {rollno,name,city,fees}=req.body;
    const Data=await stumodel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.render("insert");

}

const dataDisplay=async(req,res)=>{
    const Data=await stuModel.find();
    res.send(Data)
}

const dataSearch=async(req,res)=>{
    const{sturno} = req.body;
    const Data = await stuModel.find({rollno:sturno});
    res.send(Data)
}

module.exports={
    stuHome,
    stuInsert,
    stuDisplay,
    stuSave,
    dataSearch,
    dataDisplay
    
}