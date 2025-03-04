import { BrowserRouter, Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./component/Home"
import Insert from "./component/Insert"
import Display from "./component/Display"



function App() {

  return (
    <>
     
     <BrowserRouter>
        <Routes>
           <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="insert" element={<Insert/>}/>
           <Route path="display" element={<Display/>}/>

            

           </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
