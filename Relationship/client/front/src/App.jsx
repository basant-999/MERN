import Home from "./component/Home"
import Insert from "./component/Insert"
import Layout from "./Layout"
import Display from "./component/Display"
import { BrowserRouter,Route,Routes } from "react-router-dom"


function App() {

  return (
    <>
    
   
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout/>}>
         <Route  index element={<Home/>}/>
         <Route path="home" element={<Home/>}/>
         <Route path="insert" element={<Insert/>}/>
         <Route path="Display" element={<Display/>}/>
         

         </Route>
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
