
const modelWorker=require("../model/workerCon")

const workInsert=async(req,res)=>{
    console.log(req.body);
    const { name, city, address }=req.body;

    const data= await  modelWorker.create({
        name, city, address 
    })
    res.send(data)
 
}

const workDisplay =async (req,res)=>{
    const showDisplay = await modelWorker.find()
    res.send(showDisplay)

}
 const workSearch = async (req,res)=>{
    const {name} = req.body
     const showSearch = await modelWorker.find({name:name})
    //  res.send("basant")
    res.send(showSearch)
 }

 const workDelete=async(req,res)=>{
    const{workid} = req.query
    await modelWorker.findByIdAndDelete(workid)
    // console.log(req.query)
    res.send("delete sucessfully")
 }

 const workEditShow=async(req,res)=>{
    console.log(req.body)
    const {workid} = req.body
    const Data = await modelWorker.findById(workid)
    console.log(Data,"hanan")
    res.send(Data)  
   
 }

 const workEditsave =async(req,res)=>{
    // console.log(req.body)
    const{_id} = req.body
    console.log(_id)
    await modelWorker.findByIdAndUpdate(_id,req.body)
   
    res.send("Data successfully update!!!!!")
 }



module.exports={
    workInsert,
    workDisplay,
    workSearch,
    workDelete,
    workEditShow,
    workEditsave
}