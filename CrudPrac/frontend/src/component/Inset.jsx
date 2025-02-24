import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { message } from 'antd';
const Inset = () => { 
    const [val,setval] = useState({})

    const handleinput=(e)=>{
       let name = e.target.name
       let value = e.target.value
       setval(kisam=>({...kisam,[name]:value}))
       console.log(val)
    }
    const finalsubmit=async(e)=>{
        e.preventDefault()
        let api = "http://localhost:8000/employee/insert";
      
        try {
            const respo =await axios.post(api,val)
            console.log(respo)
            message.success(respo.data.msg)
        } catch (error) {
            console.log(error)
            alert("something wrong went")
        }
    }
  return (
   
    <>
        <Form style={{width:"500px",margin:"auto"}}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" name='name' value={val.name}onChange={handleinput}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>city</Form.Label>
                    <Form.Control type="text" name='city' value={val.city}onChange={handleinput}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name='address' value={val.address} onChange={handleinput}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>salary</Form.Label>
                    <Form.Control type="text" name='salary' value={val.salary} onChange={handleinput} />
                </Form.Group>
                
                <Button variant="primary" onClick={finalsubmit} type="submit">Submit</Button>
        </Form>
    </>
  )
}

export default Inset