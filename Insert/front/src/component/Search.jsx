import axios from 'axios';
import React, { useState } from 'react'

const Search = () => {
    const [val,setval] = useState("")
    const [sdata,setSdata] = useState([])
     const handleSubmit=async()=>{
    let api = "http://localhost:8000/worker/search";
       const response =  await axios.post(api,{name:val});
      console.log(response.data)
      setSdata(response.data)
     }

    const ans =  sdata.map((key)=>{
        return(
            <>
            <h1>{key.name}</h1>
            <h1>{key.address}</h1>
            <h1>{key.city}</h1>
            </>
        )

     })
  return (
   <>
      <h1>search all car  data here</h1>
      Enter name:<input type='text' value={val} onChange={(e)=>{setval(e.target.value)}}/>
      <button onClick={handleSubmit}>search data</button>

      {ans}
   </>
  )
}

export default Search