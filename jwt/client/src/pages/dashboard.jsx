import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
  const navigate = useNavigate()

  const logout=()=>{
    localStorage.clear()
    navigate("/home")
  }

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token)
    {
      navigate("/home")
    }
  })

  
  
 
  
  

  return (
  
    <>
    <h1>welcome to deashboard</h1>

    welcome:{localStorage.getItem("username")}
    email:{localStorage.getItem("useremail")}
    <button onClick={logout}>click logout</button>
    </>
  )
}

export default Dashboard