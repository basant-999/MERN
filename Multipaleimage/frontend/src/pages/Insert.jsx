import React, { useState } from 'react'
import axios from "axios"

const Insert = () => {
    const [input,Setinput] = useState({})
    const [image,Setimage] = useState([])

    const handeleinput=(e)=>{
        let name = e.target.name
        let value = e.target.value
        Setinput(item=>({...item,[name]:value}))
        console.log(input)
    }
    const handleimage=(e)=>{
        console.log(e.target.files)
        Setimage(e.target.files)
        console.log(image)
    }

    const finalSubmit=async()=>{
       const formdata = new FormData()
        for (const key in input) {
             formdata.append(key,input[key])
        }

        for(let i=0;i<image.length;i++){
            formdata.append("image",image[i])
        }
         let api = "http://localhost:8000/photos/datainsert"
           const respon = await axios.post(api,formdata)
           console.log(respon.data)
           alert("order book")
    }
  return (
 
    <>
    Enter product name:<input name='name' onChange={handeleinput}/> <br />
    Enter brand name:<input name='brand' onChange={handeleinput}/> <br />
    Enter price:<input name='price' onChange={handeleinput}/> <br />
    choose img :<input type='file' multiple onChange={handleimage}/>
    <button onClick={finalSubmit}> insert data</button>

    </>
  )
}

export default Insert