const Authormodel = require("../model/Authormodel")
const bookmodel = require("../model/Bookmodel")

const datainsert=async(req,res)=>{
   const {name,email,bookname,price} =req.body

   const author = await Authormodel.create({
    name:name,
    email:email,
   })
  const book  = await bookmodel.create({
    bookname:bookname,
    price:price,
    authorid:author._id
  })

  await Authormodel.findByIdAndUpdate(author._id,{$push:{bookid:book._id}})
   
   res.send("aal clear")
}
const datadisplay=async(req,res)=>{

    const author = await Authormodel.find().populate("bookid")
   res.send(author)
}

const showdata=async(req,res)=>{
    const {bookname,price,aid} = req.body
    const book = await bookmodel.create({
        bookname:bookname,
        price:price,
        authorid:aid
    })

    await Authormodel.findByIdAndUpdate(aid,{$push:{bookid:book._id}})
    
    res.send("successfully added")
}

const libdisplay=async(req,res)=>{
  const lib = await bookmodel.find().populate("authorid")
  res.send(lib)
}
module.exports={
    datainsert,
    datadisplay,
    showdata,
    libdisplay
}