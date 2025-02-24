import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  let [Dis,setDis ] = useState([])
  const displayData=()=>{
    let api = "http://localhost:8000/worker/contact";
    axios.get(api).then((res)=>{
      console.log(res.data)
      setDis(res.data)
    })
  }

  useEffect(()=>{
    displayData();
  },[])
        let sno=0;
   const Show = Dis.map((key)=>{
          sno++;
           return(
            <>
            <tr>
              <td>{sno}</td>
              <td>{key.name}</td>
              <td>{key.address}</td>
              <td>{key.city}</td>

            </tr>
            </>
           )
   })
  return (
   <>
      <center>
      <h1> this is contact page</h1>
   <table border="2px">
      <thead>
          <tr>
               <th>NO</th>
               <th>MANE</th>
               <th>ADDESS</th>
               <th>CITY</th>
          </tr>
      </thead>
        <tbody>
            {Show}     
        </tbody>
   </table>
      </center>
 

   
   </>
  )
}

export default Contact