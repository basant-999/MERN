import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Registration =()=> {
  const navigate = useNavigate()
    const [input,Setinput] = useState({})

    const handleinput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        Setinput(values=>({...values,[name]:value}))
        console.log(input)
    }
    const submit=async()=>{
        let api = "http://localhost:8000/user/registration"
        const respo = await axios.post(api,input)
        console.log(respo.data)
        navigate("/login")
    }
  return (
    <>
    <div>Registration</div>
    inter user name :<input type='text' name='name' onChange={handleinput}/><br />
    Enter emai:<input type='email' name='email' onChange={handleinput}/><br />
    Enter password<input type='password' name='password' onChange={handleinput}/><br />
    
    

    <button onClick={submit}>regisration</button>

    </>
  )
}

export default Registration