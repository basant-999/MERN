import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display =()=>{
  const [mydata,Setmydata] = useState([])

  const loaddata=async()=>{
    const api = "http://localhost:8000/user/datadisplay"
    const respon = await axios.get(api)
    console.log(respon.data)
    Setmydata(respon.data)
  }

  const ans = mydata.map((key)=>{
       return(
        <>
        <tr>
            <th>{key.name}</th>
            <th>{key.email}</th>
            <th>{key.city}</th>
            <th><img src={key.imgurl} alt="" width={100} height={100} /></th>

        </tr>
        </>
       )
  })

  useEffect(()=>{
     loaddata()
  },[])
  return (
   
    <>
    <table>
      <tr>
        <th>name</th>
        <th>eamil</th>
        <th>city</th>
        <th>image</th>

      </tr>
      <tbody>
    {ans}
      
      </tbody>
    </table>
     
    </>
  )
}

export default Display