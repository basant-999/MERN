import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Showdata = () => {
    const{id} = useParams()
    const [bookname,Setname] = useState("")
    const[price,Setemail] = useState("")
    
    const finalsubmit=async()=>{
        let api = "http://localhost:8000/library/showdata"
        const reson = await axios.post(api,{bookname:bookname,price:price,aid:id})
        console.log(reson)
    }
  return (
    <>
    <h1> add new book{id}</h1>
    Enter new book:<input value={bookname} onChange={(e)=>{Setname(e.target.value)}}/> <br />
    Enter price:<input value={price} onChange={(e)=>{Setemail(e.target.value)}}/> <br />
    <button onClick={finalsubmit}>add</button>
    </>
  )
}

export default Showdata