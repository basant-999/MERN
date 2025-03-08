import Layout from "./Layout"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./component/Home"
import Insert from "./component/Insert"
import Display from "./component/Display"
import Showdata from "./component/showdata"
import Library from "./component/Library"



function App() {

  return (
    <>
    <h1>one to many relationship pratice</h1>
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="insert" element={<Insert/>}/>
           <Route path="display" element={<Display/>}/>
           <Route path="showdata/:id" element={<Showdata/>}/>
           <Route path="booklib" element={<Library/>}/>

               
           </Route>
       </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
