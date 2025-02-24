import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// const { RiCarFill } = require("react-icons/ri");

const Edit = () => {
  let [edit,setedit] = useState({})
  let {id} = useParams();

  const loading =async()=>{
    let api = "http://localhost:8000/worker/editdatashow";
    const resp = await axios.post(api,{workid:id})
    setedit(resp.data)
    console.log(resp.data)
  }


  const finalsubmit=async(e)=>{
    e.preventDefault();
    let api = "http://localhost:8000/worker/editdatasave";
     const res= await axios.post(api,edit)
    //  message.success(res.data)
     console.log(res)
  }

  const dataSubmit=(e)=>{
   let name = e.target.name;
   let value = e.target.value;
   setedit(values=>({...values,[name]:value}))
   console.log(edit)
  }

  useEffect(()=>{
    loading()
  },[])

  return (
   <>
    <h1>edit data page</h1>
      <center>
             <h1>this About page</h1>

             Application form 
            <br /> <br />
            Enter name:<input  name='name' value={edit.name} onChange={dataSubmit}/> <br /> <br />
             Enter city:<input  name='city'   value={edit.city} onChange={dataSubmit} /> <br /> <br />
             Enter address:<input  name='address'  value={edit.address} onChange={dataSubmit} /> <br /> <br />
          <button onClick={finalsubmit}>submit form</button>
       </center>

   </>
  )
}

export default Edit


