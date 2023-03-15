import React from 'react'

const Contact = () => {
  return (
    <div className="contact container">
        <div className="contact-wrapper"></div>
        <div className="contact-details">
            <div className="contact-card location">
                <h2>LOCATION</h2>
                <p>MUNTINLUPA</p>
            </div>
            <div className="contact-card phone">
                <h2>Give us a call</h2>
                <p>3215-646-6351</p>
            </div>
            <div className="contact-card email">
                <h2>Chat with us</h2>
                <p>test@gmail.com</p>
            </div>
        </div>
        <div className="form">
            <h1>CONTACT US</h1>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button className="send-btn">SEND</button>
        </div>
    </div>
  )
}

export default Contact