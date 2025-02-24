import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import {message} from 'antd'
import {useNavigate} from 'react-router-dom'

const Update = () => {

    let [mydata,setMydata] = useState([])
    const navigate = useNavigate()

    const updateData =async ()=>{
    let api = "http://localhost:8000/worker/contact";
     const resq= await axios.get(api)
       setMydata(resq.data)
    }
  

      const deleteData=async(id)=>{
          let api = `http://localhost:8000/worker/workdelete/?workid=${id}`;
           const resq = await axios.get(api)
           message.success(resq.data)
            updateData()
            // console.log(id)
      }

      const editData=(id)=>{
        navigate(`/workedit/${id}`)
      }

      useEffect(()=>{
        updateData();
     },[])
           let no = 0
    const ans = mydata.map((key)=>{
        no++
      return(
        <>
        <tr> 
          <td>{no}</td>
            <td>{key.name}</td>
            <td>{key.address}</td>
            <td>{key.city}</td>
            <td> <RiDeleteBin6Fill onClick={()=>{deleteData(key._id)}}/></td>
            <td><FaEdit onClick={()=>{editData(key._id)}} /> </td>
        </tr>
        </>
      )

    })
  return (
     <>
      <center>
     <h1>form update page</h1>
      <table border="2px">
          <thead>
              <tr> 
                   <td>Sno</td>
                  <td>Name</td>
                  <td>Address</td>
                  <td>City</td>
                  <td> delete</td>
                  <td> edit</td>
              </tr>
          </thead>
          <tbody>
             {ans}
          </tbody>
      </table>
      </center>
     </>
  )
}

export default Update