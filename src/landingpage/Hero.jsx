import React from 'react'

const Hero = () => {
  return (
    <div className="hero container">
            <div className="hero-content">
                <h1>Let's play, let's bond.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis massa eget urna sodales vulputate. Nunc et turpis velit. Donec sagittis pretium faucibus.</p>
                <button className="btn1">Buy Now</button>
                <button className="btn2">View More</button>
            </div>
            <div className="hero-images">
                <div className="image1"></div>
                <div className="image2 active"></div>
                <div className="image3"></div>
            </div>
    </div>
  )
}

export default Hero