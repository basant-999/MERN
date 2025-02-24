import axios from "axios";
import { useState ,useEffect} from "react";

const Display=()=>{ 
    const [mydata,setmydata] = useState([]);

    const loadData=()=>{
        axios.get("http://localhost:8000/students/display").then(res=>("data dispaly"));
        console.log(res.data);
        setmydata(res.data)

    }

    return(
        <>
        <h1>niranjan</h1>
       

        </>
    )
}
export default Display;