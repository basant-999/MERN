const Stunodel= require("../model/model")
const dataSave = async(req,res)=>{
    const {rollno,name, city,fees}=res.body;
    const Data = await Stunodel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send(Data);
}

const dataDisplay=async(req,res)=>{
    const Data = await Stunodel.find();
    res.send(Data);
}

const dataSearch = async(req,res)=>{
    const {sturno}=req.body;
    const Data = await Stunodel.find({rollno:sturno});
        res.send(Data);
}

module.exports={
    dataDisplay,
    dataSave,
    dataSearch
}
