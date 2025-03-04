import Layout from "./Layout"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Dashboard from "./pages/dashboard"


function App() {

  return (
    <>
     
     <h1>bk</h1>
     <BrowserRouter> 
       <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
          </Route>
       </Routes>

          <Routes>
              <Route path="dashboard" element={<Dashboard/>}>

              </Route>
          </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
