import { useState } from "react"
import axios from "axios"
const Insert=()=>{
    let[forminput, setInput] = useState({
        rollno:"",
        name:"",
        city:"",
        fees:""
    }) 

    function hinput(e){
        let{name,value} = e.target;
        setInput(e.target.value);
        setInput({
            ...forminput,
            [name]:value
        })


    }


    function finalsubmit(e){
        e.preventDefault();
        axios.post("http://localhost:8000/students/save",forminput).then(res=>alert("data is inserted"));
    }
    return(
        <>
        <h1>this is insert page</h1>
        <form action="" onSubmit={finalsubmit}>
            rollnumber:<input type="text" name="rollno" value={forminput.rollno} onChange={hinput}></input><br></br>
            name:<input type="text" name="name" value={forminput.name} onChange={hinput}></input><br></br>
            city:<input type="text" name="city" value={forminput.city} onChange={hinput}></input><br></br>
            fees:<input type="text" name="fees" value={forminput.fees} onChange={hinput}></input><br></br>
            <input type="submit" />
        </form>
        
        
        </>
    )
}
export default Insert