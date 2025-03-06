
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
const Display=()=>{
  const navigate = useNavigate()
  const [mydata, setMydata] = useState([]);


  const loadData=async()=>{
    let api="http://localhost:8000/photos/datadisplay";
    const response = await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    loadData();
  }, [])


 const ans=mydata.map((key)=>{
  return(
    <>
      <tr>
       <td>
       {key.images.map((key1)=>{
           return(
            <>
           
           
          
               <img src={`http://localhost:8000/${key1}`}  width="40" height="40" />
               <br/>
            </>
           )
        })}

       </td>
        <td> 
       


          <img 
          onClick={()=>{navigate(`/showdata/${key._id}`)}}
          src={`http://localhost:8000/${key.defaultimage}`} width="300" height="300" />
           </td>
        <td> {key.name} </td>
        <td> {key.brand} </td>
        <td> {key.price} </td>
      </tr>
    </>
  )
 })

  return(
    <>
      <h1> Display Data</h1>
      <hr />
      <table >
        <tr>
          <th>imagee </th>
          <th>name </th>
          <th> brand</th>
          <th> price</th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default Display;
