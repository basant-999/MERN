import React from 'react'
import {Link, Outlet} from "react-router-dom"
const Layout = () => {
  return (
   <>
   <Link to="home">Home</Link>
   <Link to="insert">Insert</Link>
   <Link to="display">Display</Link>
   <Link to="addbook">AddBook</Link>


   <hr />
   <Outlet/>
   <hr />
   www.basant kushwaha.in
   </>
    
  )
}

export default Layout