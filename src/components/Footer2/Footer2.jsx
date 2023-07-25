import React from 'react'
import "./Footer2.css"
const Footer2 = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth flexCenter g-container">
            <div className="flexColStart flexCenter f-left">
                <img src="F-logo-removebg-preview.png" alt="" />
                <span className='second-text'>Our Vision is to Make your life <br/>Better Forever with Our Best</span>
            </div>

            <div className="flexColStart f-right">
                <span className='primary-text'>Information</span>
                <span className='second-text'>Mumbai Lodha PALAVA</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Service</span>
                    <span>Product</span>
                    <span>About us</span>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Footer2
