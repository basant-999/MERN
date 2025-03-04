import React from 'react'
import {Link,Outlet} from "react-router-dom"

const Layout = () => {
  return (
  
    <>
    <Link to="home">home</Link> |
    <Link to="login">login</Link>|
    <Link to="registration">registration</Link>
    <hr />

    <Outlet/>
    <hr />

    www.jwt .com
        

    </>
  )
}

export default Layout