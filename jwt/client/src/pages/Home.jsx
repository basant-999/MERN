import React, { useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();

  const userAuthenticate =async()=>{
    const token = localStorage.getItem("token")
    if(token)
    {
            let api = "http://localhost:8000/user/authentication"
            const respo = await axios.post(api,null,{headers:{"x-auth-tokan":token}})
            console.log(respo.data)
            localStorage.setItem("username",respo.data.name)
            localStorage.setItem("useremail",respo.data.email)
           
            navigate("/dashboard")
    }

  }

   useEffect(()=>{
  userAuthenticate()
   },[])
  return (
 
    <>
    <h1>welcome to home page </h1>
    </>
  )
}

export default Home