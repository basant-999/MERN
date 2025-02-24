
import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {message} from "antd"
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const[val,setval]=useState({})
  const navigate=useNavigate()
const handleinput=(e)=>{
 let name = e.target.name
 let value = e.target.value
 setval(item=>({...item,[name]:value}))
 console.log(val)
}
  const finalsubmit=async(e)=>{
   e.preventDefault()
   let api = "http://localhost:8000/employee/login"
   try {
    const respone = await axios.post(api,val)
         console.log(respone.data.city)
         console.log(respone.data.name)
    if(respone.status==200){
      localStorage.setItem("username",respone.data.name)
      localStorage.setItem("usercity",respone.data.city)
      navigate("/dashboard")
    }
   } catch (error) {

    message.error(error.respone.data.msg)
   }
  }
  return (
   
    <>
     <Form style={{width:"500px",margin:"auto"}}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" name='name' value={val.name}onChange={handleinput}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>city</Form.Label>
                    <Form.Control type="text" name='city' value={val.city}onChange={handleinput}  />
                </Form.Group>
      
        
                <Button variant="primary" onClick={finalsubmit} type="submit">Submit</Button>
        </Form>
    </>
  )
}

export default Login