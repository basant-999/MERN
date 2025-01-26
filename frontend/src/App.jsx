import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/insert' element={<insert/>}/>
      <Route path="/display"element={<display/>}/>
  
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
