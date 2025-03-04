import React, { useState } from 'react'
import axios from "axios"

const Insert = () => {
    const [input,Setinut] = useState({})
    const [seletfile,Setselectfile] = useState("")

    const imageinput=(e)=>{
        Setselectfile(e.target.files[0])
        console.log(seletfile)
    }

    const handleinput=(e)=>{
        let name = e.target.name
        let value = e.target.value
        Setinut(values=>({...values,[name]:value}))
        console.log(input)
    }

    const submit=async()=>{
        const formdata = new FormData()  //javaScript constructor he 
        formdata.append("file",seletfile)                  // append means add rna
        formdata.append("upload_preset","kisancybrom")
        formdata.append("cloud_name","dhv4lnxvm")

        let api = "https://api.cloudinary.com/v1_1/dhv4lnxvm/image/upload"
        const ans =  await axios.post(api,formdata)
        console.log(ans.data.url)
        alert("image upload")

        const api1 = "http://localhost:8000/user/datasave"
        const respon = await axios.post(api1,{imagename:ans.data.url,...input})
         console.log(respon.data)
    }
  return (
    
    <>
    name<input type='text' name='name' onChange={handleinput}/> <br />
    email<input type='text' name='email' onChange={handleinput}/><br />
    city<input type='text' name='city' onChange={handleinput}/><br />
    image<input type='file'  onChange={imageinput}/><br />
     <button onClick={submit}>save</button>

    </>
  )
}

export default Insert