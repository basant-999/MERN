import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Display = () => {
    const navigate = useNavigate()
    const [display,Setdisplay] = useState([])
    const showdata=async()=>{
        let api = "http://localhost:8000/library/datadisplay"
        const displaydata = await axios.get(api)
        console.log(displaydata.data)
        Setdisplay(displaydata.data)

    }

    useEffect(()=>{
      showdata()
    },[])

      const ans = display.map((key)=>{
           return(
            <>
            <tr>
                 <td>{key.name}</td>
                 <td>{key.email}</td>
                 <td>
                    {
                        key.bookid.map((key1)=>{
                            return(
                                <>
                                <p>{key1.bookname},{key1.price}</p>
                                </>
                            )
                        })
                    }
                 </td>
                 <td><button onClick={()=>{navigate(`/showdata/${key._id}`)}}>addbook</button></td>
            </tr>
            </>
           )
      })

  return (
  
    <>
      <table>
         <tr>
            <th>name</th>
            <th>email</th>
            <th>book/price</th>
            <th>add new</th>
         </tr>
         <tbody>
            {ans}
         </tbody>
      </table>
    </>
  )
}

export default Display