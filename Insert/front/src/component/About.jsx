import React, { useState } from 'react'
import axios from 'axios'

const About = () => {
    let [input,setInput] = useState({})

     const dataSubmit=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setInput((values)=>({...values,[name]:value}))
       
     }
     const finalsubmit=async()=>{
        let api = "http://localhost:8000/worker/about";
        const response=await axios.post(api,input)
        console.log(response.data)
     }

  return (
  <>
      <center>
           <h1>this About page</h1>

            Application form 
            <br /> <br />
            Enter name:<input type="text" name='name' onChange={dataSubmit}/> <br /> <br />
            Enter city:<input type="text"name='city' onChange={dataSubmit} /> <br /> <br />
            Enter address:<input type="text" name='address' onChange={dataSubmit} /> <br /> <br />
            <button onClick={finalsubmit}>submit form</button>

      </center>
  </>
  )
}

export default About