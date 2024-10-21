import React from 'react'
import Header from './Common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Common/Footer'
import Home from './Home'


export default function RootLevel() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/> 
    </>
  )
}
