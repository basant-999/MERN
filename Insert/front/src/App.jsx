import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/contact"
import Update from "./component/Update"
import Search from "./component/Search"
import Edit from "./Edit"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/update" element={<Update/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/workedit/:id" element={<Edit/>}/>


         
      </Route>
    </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
