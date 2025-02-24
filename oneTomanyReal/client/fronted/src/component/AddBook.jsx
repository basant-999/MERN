import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
    const [mydata,Setmydata] = useState([])
    const naviget = useNavigate()

    const Loading=async()=>{
        let api = "http://localhost:8000/account/authorshow";
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

    const ans  = mydata.map((key)=>{
        return(
            <>
            <tr>
                 <td>{key.name}</td>
                 <td>{key.email}</td>
                 <td>{key.city}</td>
                 <td><button onClick={()=>{naviget(`/newbook/${key._id}`)}}>addbook</button></td>
            </tr>
            </>
        )

    })
  return (
   
    <>
    <h1>Add New Book</h1>
    <table border="2" width="500px">
         <tr>
             <th>name</th>
             <th>email</th>
             <th>city</th>
             <th>add</th>
         </tr>
         <tbody>
            {ans}
         </tbody>
    </table>

    </>
  )
}

export default AddBook