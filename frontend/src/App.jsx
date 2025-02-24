
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './home'
import Insert from './insert'
import Display from './display'




function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/insert' element={<Insert/>}/>
      <Route path="/display"element={<Display/>}/>
  
      </Route>
     </Routes>
    </>
  )
}

export default App
