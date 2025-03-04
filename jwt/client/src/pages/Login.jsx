import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,Setemail] = useState("")
    const [password,Setpassword] = useState("")
    const navigate = useNavigate()

    const submit=async()=>{
      let api = "http://localhost:8000/user/login"
      const respo = await axios.post(api,{email:email,password:password})
      localStorage.setItem("token",respo.data.token)
      console.log(respo.data.token)
      navigate("/home")
    }


  return (
    <>
    <div>Login</div>
    Enter Email:<input value={email} onChange={(e)=>{Setemail(e.target.value)}}/> <br />
    Enter password:<input value={password} onChange={(e)=>{Setpassword(e.target.value)}}/><br />
    <button onClick={submit}>login</button>
   
    </>
  )
}

export default Login