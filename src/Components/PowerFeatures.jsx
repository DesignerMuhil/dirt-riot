import React from 'react'
import './PowerFeatures.css'

import hrz from '../assets/HRZ-Line.svg'
import hrzArr from '../assets/HRZ-Arrow.svg'

import img1 from '../assets/HRZ-Img1.png'
import img2 from '../assets/HRZ-Img2.png'
import img3 from '../assets/HRZ-Img3.png'


const features = [
  {
    id: 1,
    title: "All-Terrain Dominance",
    description: "Crush sand, shred snow, rip through dirt, and conquer hills like a beast. With fat tires, long-travel suspension, and a torque-packed hub motor, no terrain stands a chance.",
    image: img1
  },
  {
    id: 2,
    title: "Smart Ride Control",
    description: "Real-time analytics, torque-sensing precision, and a badass mobile app to keep tabs on your ride. You ride harder — it rides smarter.",
    image: img2
  },
  {
    id: 3,
    title: "Rugged. Light. Unstoppable.",
    description: "Built from aerospace-grade aluminum, this frame is tough enough for punishment but light enough to fly. Raw strength meets sharp agility.",
    image: img3
  }
]

function PowerFeatures() {
  return (
    <div className='PowerFeatureSection'>
        
      <div className='Header'>
        <div className='HeaderText'>
          <h3>POWERFULL FEATURE AVAILABLE</h3>
          <p>
            Crafted with premium components, a powerful drivetrain, and an intelligent digital backbone, it delivers the perfect fusion of muscle and mind. Every ride becomes an expedition — electric, effortless, and explosive.
          </p>
        </div>

        <button className='ViewBtn'>VIEW PRODUCT</button>
      </div>

      <img className='HrzLine' src={hrz} alt="" />

      <div className='PowerCardContainer'>
        {features.map((feature) => (
          <div className='PowerCard' key={feature.id}>
            <img src={feature.image} alt={feature.title} />
            <div className='PowerCardText'>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
            
      <div className='Arrow'>
        <img src={hrzArr} alt="Arrow" />
      </div>

    </div>
  )
}

export default PowerFeatures
