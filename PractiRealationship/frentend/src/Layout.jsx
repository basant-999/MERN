import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <>
  <Link to="home">Home</Link> |
  <Link to="insert">Insert</Link>|
  <Link to="display">Display</Link>|
  <Link to="booklib">library</Link>
  <hr />

  <Outlet/>
  <hr />
  www.bk.com

  </>
  )
}

export default Layout