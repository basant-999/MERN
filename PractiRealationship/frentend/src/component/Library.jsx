import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Library = () => {
    const [mydata,Setdata] = useState([])
    const load=async()=>{
        let api = "http://localhost:8000/library/booklib"
        const respons = await axios.get(api)
        console.log(respons.data)
        Setdata(respons.data)
    }
    useEffect(()=>{
        load()
    },[])

    

  return (
    <>
    <h1>all bookk data</h1>
    <table>
        <thead>
         <tr>
             <th>bookname</th>
             <th>price</th>
             <th>author </th>
             <th> email</th>
         </tr>
         </thead>
         <tbody>
            {
                mydata.map((key)=>{
                   return(
                    <>
                    <tr>
                        <td>{key.bookname}</td>
                        <td>{key.price}</td>
                        <td>{key.authorid.name}</td>
                        <td>{key.authorid.email}</td>

                    </tr>
                    </>
                   )
                })
            }
         </tbody>
    </table>

    </>
  )
}

export default Library