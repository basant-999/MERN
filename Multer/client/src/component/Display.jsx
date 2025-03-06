import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

const Display = () => {
  const [mydata,Setmydata] = useState([])

  const datadisplay=async()=>{
      let api = "http://localhost:8000/multer/datadisplay"
      const respone = await axios.get(api)
      console.log(respone.data)
      Setmydata(respone.data)
  }

  useEffect(()=>{
    datadisplay()
  },[])

  const ans = mydata.map((key)=>{
       return(
        <>
        <tr>
          <td>
            <img src={`http://localhost:8000/upload/${key.image}`} width={100} height={100} alt="" />
           </td>
            <td> {key.rollno}</td>
            <td> {key.name} </td>
            <td> {key.city} </td>

        </tr>
       
        </>
       )
  })
  return (
    <>
      <h1>dispaly data</h1>

      <table border="2px">
         <tr> 
           <th> emp image</th>
           <th>emp id</th>
           <th> emp name</th>
           <th> emp address</th>
         </tr>
         <tbody>
           {ans}
         </tbody>
      </table>
    </>
  )
}

export default Display