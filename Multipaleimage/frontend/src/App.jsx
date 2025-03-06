import { BrowserRouter, Route ,Routes} from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Display from "./pages/Display"
import Insert from "./pages/Insert"
import Showdata from "./pages/Showimage"


function App() {

  return (
    <>
     <h1>multipale image store project</h1>
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="insert" element={<Insert/>}/>
          <Route path="showdata/:id" element={<Showdata/>}/>

          

          </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
