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
module.exports={
    datainsert
}