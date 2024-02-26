import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      
      <Header/>
      <Navbar/>

      <div className="">
        <Outlet/>
      </div>
      
      <Footer/>

    </div>
  )
}
