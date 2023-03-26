import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Products from './Products'
import About from './About'
import Spacer from './Spacer'
import Contact from './Contact'

const Landingpage = () => {
  return (
    <>
        <Hero/>
        <Services/>
        <Products/>
        <About/>
        <Spacer/>
        <Contact/>
    </>
  )
}

export default Landingpage