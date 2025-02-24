import React, { useState } from 'react'
import axios from "axios"

const Insert = () => {
    const [input,Setinput] = useState({})
    const handleinput=(e)=>{
        let name = e.target.name
        let value = e.target.value
        Setinput(item=>({...item,[name]:value}))
        console.log(input)

    }
    const finalSubmit=async()=>{
          let api = "http://localhost:8000/account/insert";
        try {
            const respone = await  axios.post(api,input)
            console.log(respone)
            alert("booooooooooooooooooook")
        } catch (error) {
            console.log(error)
        }

    }
  return (
   
    <>
    AuthorName:<input name='name' value={input.name} onChange={handleinput}/> <br />
    AuthorEmail:<input name='email' value={input.email} onChange={handleinput}/> <br />
    Authorcity:<input name='city' value={input.city} onChange={handleinput}/><br />
    <button onClick={finalSubmit}>Add</button>

   
    </>
  )
}

export default Insert