 const Authormodel = require("../model/Athourmodel")
 const Bookmodel= require("../model/Bookmodel")
const Bookinsert =async(req,res)=>{
        const{name,email,city} = req.body

        const autho = await  Authormodel.create({
            name:name,
            email:email,
            city:city

        })

         res.status(200).send("author sucees createdddd!!")
}

const Bookshow=async(req,res)=>{
    const Author = await Authormodel.find()
    res.status(200).send(Author)

}

const AddnewBook=async(req,res)=>{
    const{id,bookname,price} =req.body
    try {
        const book = await Bookmodel.create({
            bookname:bookname,
            bookprice:price,
            authorid:id
        })
        await Authormodel.findByIdAndUpdate(id,{$push:{bookid:book._id}})
    } catch (error) {
        console.log(error)
        
    }
}
const Displayalldata=async(req,res)=>{
    const Authordata  = await Authormodel.find().populate("bookid")
    res.status(200).send(Authordata)
}
module.exports={
    Bookinsert,
    Bookshow,
    AddnewBook,
    Displayalldata,
}