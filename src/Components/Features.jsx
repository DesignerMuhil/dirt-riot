import React from 'react'
import './Features.css'
import bike1 from '../assets/Bike1.png'

function Features() {
  return (
    <div className='FeatureSection'>
        <div className='FeatureContent'> 
            More Than a Bike. It's an Escape Machine.
            <p>The Off-Road Electric Bike isn’t just built for riding  it’s engineered for conquering. Whether you're tearing through dirt trails, weaving forest paths, or dominating rocky inclines, this machine transforms wild terrain into your playground.</p>
            <div className='keyPoints'>
                <div>
                    <h5>750W</h5>
                    <p>Hub Motor</p>
                </div>
                <div>
                    <h5>4.0"</h5>
                    <p>Fat Tires</p>
                </div>
                <div>
                    <h5>960Wh</h5>
                    <p>Removable Battery</p>
                </div>
                <div>
                    <h5>Hydraulic</h5>
                    <p>Disc Brakes</p>
                </div>
                <div>
                    <h5>Smart Ride App </h5>
                    <p>customize through our app</p>
                </div>
            </div>
        </div>
        <div className='FeatureImageContainer'>
            <img className='FeatureImage' src="./src/assets/Bike1.png" alt="BikeImage" />
        </div>
    </div>
  )
}

export default Features