import React from 'react'
import './Footer.css'
import logo from '../assets/DirtRiotLogo.svg'

function Footer() {
  return (
    <div className='FooterSection'>

      <div className='FooterTop'>
        <div className='FooterBrand'>
          <img src={logo} alt="Dirt Riot Logo" className='FooterLogo' />
          <p>Built by riders, for riders — we engineer electric machines that conquer the wild.</p>
          <div className='NewsletterRow'>
            <input type="email" placeholder="Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className='FooterCol'>
          <h4>COMPANY</h4>
          <p>Home</p>
          <p>About</p>
          <p>Product</p>
          <p>Pricing</p>
        </div>
        <div className='FooterCol'>
          <h4>PRODUCT</h4>
          <p>E-Dirt Bike</p>
          <p>Dirt Riot App</p>
          <p>Dirt Riot Watch</p>
        </div>
        <div className='FooterCol'>
          <h4>RESOURCE</h4>
          <p>Blog</p>
          <p>Customer Service</p>
          <p>Social Media</p>
          <p>Contact Us</p>
        </div>

      </div>
      <div className='FooterBottom'>
        <p>© 2025 Dirt Riot. All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer