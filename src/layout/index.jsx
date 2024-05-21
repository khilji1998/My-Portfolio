import React from 'react'
import Header from '../components/header'
function Layout({ children }) {
  return (
    <>
        <Header/>
         <Outlet />
        <Footer/>
    </>
  )
}

export default Layout