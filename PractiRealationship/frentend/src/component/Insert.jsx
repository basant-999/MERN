import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Insert = () => {
    const[input,Setinput] = useState({})

    const handleinput=(e)=>{
        let name =e.target.name
        let value = e.target.value
        Setinput(ites=>({...ites,[name]:value}))
        console.log(input)
    }
    const submit=async()=>{
        let api="http://localhost:8000/library/datainsert";
        const respone = await axios.post(api,input)
        console.log(respone.data)
    }
  return (
   
    <>
    Enter Aurhor name:<input name='name' onChange={handleinput}/> <br />
    Enter email:<input name='email' onChange={handleinput}/> <br />
    Enter bbokname:<input name='bookname' onChange={handleinput}/> <br />
    Enter price:<input name='price' onChange={handleinput}/> <br />
    <button onClick={submit}>save</button>
    </>
  )
}

export default Insert