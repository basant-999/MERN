import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    useEffect(()=>{
    if(!localStorage.getItem("username")&& !localStorage.getItem("usercity")){
         navigate("/login")
    }
    },[])
    const logout=()=>{
      localStorage.clear()
       navigate("/login")
    }
  return (
   
    <>
    <h1>welcome to dashboard</h1>
    welcome:{localStorage.getItem("username")} <br />
    city:{localStorage.getItem("usercity")} <br/>
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default Dashboard