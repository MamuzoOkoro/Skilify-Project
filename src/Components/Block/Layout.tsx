import React from 'react'
import Header from '../static/Header'
import Footer from '../static/Footer'
import { Outlet } from 'react-router-dom'
import Homescreen from '../../Pages/Homescreen'
import Body from '../../Pages/Body'
import Body2 from '../../Pages/Body2'
import Body3 from '../../Pages/Body3'
import Body4 from '../../Pages/Body4'
import Body5 from '../../Pages/Body5'
import Body6 from '../../Pages/Body6'
import Body7 from '../../Pages/Body7'


const Layout = () => {
  return (
    <div>
      <Header/>
      <Homescreen/>
      <Body/>
      <Body2/>
      <Body3/>
      <Body4/>
      <Body5/>
      <Body6/>
      <Body7/>
      <Footer/>
      <Outlet/>
    </div>
  )
}

export default Layout