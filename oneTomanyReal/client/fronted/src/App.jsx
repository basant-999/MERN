
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./component/Home"
import Insert from "./component/Insert"
import Display from "./component/Display"
import AddBook from "./component/AddBook"
import BooknewAdd from "./component/BooknewAdd"
function App() {
  
  

  return (
    <>
      <h1>one to many relation</h1>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="insert" element={<Insert/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="addbook" element={<AddBook/>}/>
            <Route path="newbook/:id" element={<BooknewAdd/>}/>

                
            </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
