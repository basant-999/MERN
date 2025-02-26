import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Display = () => {
    const[mydata,Setmydata] = useState([])
  const Loading=async()=>{
    let api = "http://localhost:8000/account/displayalldata";
    try {
        const respo = await axios.get(api)
        console.log(respo.data)
        Setmydata(respo.data)
    } catch (error) {
        console.log(error)
        
    }
}
useEffect(()=>{
  Loading()
},[])

const ans = mydata.map((key)=>{
    return(
      <>
      <tr>
         <td>{key.name}</td>
         <td>{key.city}</td>
         <td>{key.email}</td>
         <td>
            {
              key.bookid.map((key2)=>{
                return(
                  <>
                  <p>bookname:{key2.bookname}  <br />bookprice:{key2.bookprice}</p>
                  </>
                )
              })
            }
         </td>

      </tr>
      </>
    )
})
  return (
   
    <>
    <h1>display all data</h1>
    <table>
       <tr>
          <th>name</th>
          <th>city</th>
          <th>email</th>
          <th>books</th>
       </tr>
        <tbody>
           {ans}
        </tbody>
    </table>

    </>
  )
}

export default Display