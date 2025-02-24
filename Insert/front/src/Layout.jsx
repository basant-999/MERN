import React from 'react'
import{Link,Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <>
    <div>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="update">Update</Link>
        <Link to="search">Search</Link>

    </div>

    <Outlet/>
    <hr />
    wwww.basant
    <hr />

    </>
  )
}

export default Layout