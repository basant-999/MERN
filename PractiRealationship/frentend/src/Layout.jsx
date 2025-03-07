import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <>
  <Link to="homr">Home</Link> |
  <Link to="insert">Insert</Link>|
  <Link to="display">Display</Link>
  <hr />

  <Outlet/>
  <hr />
  www.bk.com

  </>
  )
}

export default Layout