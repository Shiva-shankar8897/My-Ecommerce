import React from 'react'
import Navbar from '../MainPage/Navbar'
import Products from '../MainPage/Products'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <img src='/Images/banner1.jpg' alt='pic' />
      <Products />
    </div>
  )
}

export default LandingPage

