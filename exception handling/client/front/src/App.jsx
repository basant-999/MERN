

import axios from "axios"
function App() {
  const handle1=async()=>{
     let api = "http://localhost:8090/homepage"

       try {
        let res= await axios.get(api)
        console.log(res)
       } catch (error) {
        alert(error.response.data.msg)
       }
  }
  const handle2=async()=>{
        let api = "http://localhost:8090/about"
    let res =  await axios.get(api)
    console.log(res)
  }
  const handle3=async()=>{
         let api = "http://localhost:8090/service"
    let res = await axios.get(api)
    console.log(res)
  }

  return (
    <>
    
    <h1>erroe</h1>
      <button onClick={handle1}>home page</button>
      <button onClick={handle2}>about page</button>
      <button onClick={handle3}>service page</button>
      
    </>
  )
}

export default App
