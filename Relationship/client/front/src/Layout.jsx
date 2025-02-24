import React from 'react'
import {Outlet,Link} from "react-router-dom"

const Layout = () => {
  return (
   
    <>
    <Link to="home">home</Link> |
    <Link to="insert">Insert</Link>|
   <Link to="display">Display</Link>| <br />

     <Outlet/>
     <hr />

     wwww.basantkuswaha.com
    </>
  )
}

export default Layout