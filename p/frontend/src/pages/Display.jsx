
import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata]= useState([]);

    const loadData=()=>{
        let api="http://localhost:8080/students/datadisplay";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.rollno} </td>
                <td> {key.name} </td>
                <td> {key.city} </td>
                <td> {key.fees} </td>
              </tr>
            
            </>
        )
    })
    useEffect(()=>{
        loadData();
    }, []);

    return(
        <>
         <h1> Display Data</h1>
         <table border="1" width="50%" align="center">
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
         </table>
        </>
    )
}

export default Display;