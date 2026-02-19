import React from 'react'
import './Navbar.css'
import logo from '../assets/DirtRiotLogo.svg'

function Navbar() {
  return (
    <div className='NavBar'>
        <div className='NavLogo'>
            <img className="Logo" src={logo} alt="DirtRiotLogo" />
        </div>

        <div className='MenuItems'>
            <div>Home</div>
            <div>About</div>
            <div>Product</div>
            <div>Pricing</div>
        </div>

        <div className='LoginBox'>
            <button className='BuyBtn'>Buy Now</button>
        </div>
    </div>
  )
}

export default Navbar
