import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display = () => {
  const [mydata,setmydata] = useState([])

  const Loding=async()=>{
     let api = "http://localhost:8080/user/display"
     try {
       const respon = await axios.get(api)
      //  console.log(respon)
      setmydata(respon.data)
     } catch (error) {
      console.log(error)
     }
  }


  useEffect(()=>{
    Loding()
  },[])

  
  const ans = mydata.map((key)=>{
    return(
      <>
      <tr>
        <td> {key.firstname} </td>
        <td> {key.lastname} </td>
        <td> {key.userid.email} </td>
        <td> {key.userid.username} </td>
      </tr>
     
      </>
    )
})
  return (
  
    <>
    
    <table style={{border:"2px solid black"}}>
       <tr>
         <th>First name</th>
         <th>Lastname</th>
         <th>Email</th>
         <th>Username</th>
       </tr>
        <tbody>
            {ans}
        </tbody>
    </table>
    </>
  )
}

export default Display