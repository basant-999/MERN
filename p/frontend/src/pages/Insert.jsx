import { useState } from 'react'
import axios from "axios"

const Insert = () => {
  const [input, setInput]= useState({});

  const handleSubmit=()=>{
    let api="http://localhost:8080/students/datasave";
    axios.post(api,input).then((res)=>{
     alert("data save!")
    })
 }

 const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     setInput(values=>({...values, [name]:value}))
    
 }

  return (
   <>
   <h1>Insert data</h1>
   Enter rollno : <input type="text"  name='rollno' onChange={handleInput}/> <br />

   Enter name : <input type="text"  name='name' onChange={handleInput}/> <br />

   Enter city : <input type="text"  name='city' onChange={handleInput}/> <br />

   Enter fees : <input type="text"  name='fees' onChange={handleInput}/> <br />

   <button onClick={handleSubmit}>Save!</button>



   </>
  )
}

export default Insert