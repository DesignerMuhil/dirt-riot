import React from 'react'
import './Hero.css'
import hero from './src/assets/HeroImage.png'

function Hero() {
  return (
    <div className='HeroSec'>
        <div className='HeroTextPrimary'>
            Unleash Adventure
        </div>
        <div>
            <img className='HeroImg' src={hero} alt="" />
        </div>
        <div className='HeroContent'>
             Electric Off-Road Bike Built for the Wild
            <p>Powerful. Rugged. Smart. The ultimate ride to conquer any terrain.</p>
            <div className='HeroBtns'>
                <button className='HPri'>Explore Bike</button>
                <button className='HSec'>Pre-Order Now</button>
            </div>
        </div>
        <div>
            <div className="radar-wrapper">
                {/* Radiating circles */}
                <div className="ring ring1"></div>
                <div className="ring ring2"></div>
                <div className="ring ring3"></div>

                {/* Main orange circle */}
                <div className="main-circle">
                    
                    {/* Spinning text using SVG */}
                    <svg className="spinning-text" viewBox="0 0 200 200">
                    <defs>
                        <path id="circlePath" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"/>
                    </defs>
                    <text>
                        <textPath href="#circlePath">
                        LET'S SEE PREVIEW PRODUCT VIDEO
                        </textPath>
                    </text>
                    </svg>

                    {/* Play button in center */}
                    <div className="play-btn">&#9654;</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero