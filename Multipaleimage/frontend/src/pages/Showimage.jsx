import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Showdata = () => {
    const [showimages,Setshowimage] = useState({})
    const [prodispay,Setprodisplay] = useState("")
    const [deimage,Setdeimage] = useState([])
    const {id} = useParams()


    const loadData=async()=>{
        let api="http://localhost:8000/photos/showdata";
        const response = await axios.post(api,{"id":id});
        Setshowimage(response.data);
        console.log(response.data);
        Setprodisplay(response.data.defaultimage)
        Setdeimage(response.data.images)
        
      }


      const ans = deimage.map((key)=>{
          return(
            <>
            <button onMouseEnter={()=>Setprodisplay(key)}>
            <img src={`http://localhost:8000/${key}` } style={{height:"50px",width:"70px"}}  alt="" />
            </button>
            </>
          )
      })

      


      useEffect(()=>{
        loadData()
      },[])

  return (

    <>
    <h1> show image image {id}</h1>

    <div style={{display:"flex",width:"100%"}}>
         <div style={{width:"10%"}}>
         {ans}
         </div>
  
         <div style={{width:"90%"}} >
         <img src={`http://localhost:8000/${prodispay}`}     width="300" height="300" />
        </div>
    </div>




    </>
  )
}

export default Showdata