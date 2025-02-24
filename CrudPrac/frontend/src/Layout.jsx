import React from 'react'
import Main from './component/Navbar'
import Fotter from './component/Fotter'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   
    <>
  <Main/>
   <Outlet/>
   <hr />
  <Fotter/>
    </>
  )
}

export default Layout