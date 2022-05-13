import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Attendance from '../Attendance/Attendance'
import Footer from '../Footer/Footer'


function Landing() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Attendance/>
        <Footer/>
    </div>
  )
}

export default Landing