import React from 'react'
import Navbar from '../Layout/Navbar'
import Hero from './Hero'
import About from '../About/About'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className='mt-20'>
        <About/>
          </div>
    </div>
  )
}

export default Homepage