import React, { useState } from 'react'
import axios from "axios"

const Insert = () => {
    const [rollno ,Setrollno] = useState("")
    const [name ,Setname] = useState("")
    const [city ,Setcity] = useState("")
    const [image,Setimage] = useState("")

    const handleimage=(e)=>{
        // let name = e.target.name
        let value = e.target.files[0]
        //    Setimage({[name]:value})
        Setimage(value)
           console.log(image)
    }

    const submit=async()=>{
        let api = "http://localhost:8000/multer/datainsert"
        

        const formdata  = new  FormData()
        formdata.append("rollno",rollno)
        formdata.append("name",name)
        formdata.append("city",city)
        formdata.append("image",image)

        const respon =  await axios.post(api,formdata)
        console.log(respon.data)
        alert("upload  emp data")

    }

  return (
    
    <>
       Enter emp id:<input value={rollno} onChange={(e)=>{Setrollno(e.target.value)}}/> <br />
       Enter name:<input value={name} onChange={(e)=>{Setname(e.target.value)}}/> <br />
       Enter address:<input value={city} onChange={(e)=>{Setcity(e.target.value)}}/> <br />
       upload img img:<input type='file' name='file' onChange={handleimage}/>
       <button onClick={submit}>save data</button>

    </>
  )
}

export default Insert