import React from 'react'
import { useState } from 'react'
import axios from "axios"
const Insert = () => {
    const [input,Setinput] = useState({})  

    const handlesubmit=(e)=>{
        let name = e.target.name
        let value = e.target.value
        Setinput(item=>({...item,[name]:value}))
        console.log(input)
    }
    const finalsubmit=async()=>{
     let api = "http://localhost:8080/user/insert"
     try {
        let respone = await axios.post (api,input)
        console.log(respone)
        alert("successfullty save")
     } catch (error) {
      console.log(error)
     }
    }
  return (
  
    <>
    Enterusername:<input name='username' value={input.username} onChange={handlesubmit}/> <br/>
    Enteremail:<input name='email' value={input.email} onChange={handlesubmit}/> <br/>
    Enterfirstname:<input name='firstname' value={input.firstname}  onChange={handlesubmit}/> <br/>
    Enterlastname:<input name='lastname' value={input.lastname}  onChange={handlesubmit}/> <br/>
    <button onClick={finalsubmit}>submit</button>
    </>
  )
}

export default Insert