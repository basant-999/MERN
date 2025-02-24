import React from 'react'
import {Link , Outlet} from "react-router-dom"
function Layout() {
  return (
    <>

     <Link to="/" >Home/</Link> 
     <Link to="/insert" >Insert/</Link> 
     <Link to="/display" >Display</Link> 
  <main><Outlet/></main>
    </>
  )
}

export default Layout