import Layout from "./Layout"
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import Home from "./component/Home"
import Inset from "./component/Inset"
import Search from "./component/Search"
import Update from "./component/Update"
import Login from "./component/Login"
import Dashboard from "./component/Dashboard"


function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/insert" element={<Inset/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
          
        </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
