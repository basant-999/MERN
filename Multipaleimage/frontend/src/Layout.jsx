import React from 'react'
  import {Link, Outlet} from "react-router-dom"

const Layout = () => {
  return (
   
    <>
    <Link to="/home">Home</Link>
    <Link to="/display">Display</Link>
    <Link to="/insert">Insert</Link>
    <hr />
    <Outlet/>
    <hr />

    wwww. multipal image store with use of muter 

    </>
  )
}

export default Layout