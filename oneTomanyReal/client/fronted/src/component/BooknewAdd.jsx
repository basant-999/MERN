import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BooknewAdd = () => {
    const {id} = useParams()
    const [bookname,Setbookname] = useState("")
    const [price,setprice] = useState("")
    const submit=async()=>{
        let api = "http://localhost:8000/account/addnewbook";
        try {
            const respo = await axios.post(api,{id:id,bookname:bookname,price:price})
            console.log(respo.data)
        } catch (error) {
            console.log(error)
            
        }
        
    }
  return (
    <>
    Enter Bookname:<input type='text' value={bookname} onChange={(e)=>{Setbookname(e.target.value)}}/> <br />
    Enter Price:<input type='text' value={price} onChange={(e)=>{setprice(e.target.value)}}/> <br />
    <button onClick={submit}>addNew</button>
    </>
  )
}

export default BooknewAdd