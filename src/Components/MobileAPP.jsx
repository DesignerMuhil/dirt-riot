import React from 'react'
import './MobileApp.css'

const keyPoints = [
  {
    id: 1,
    title: "Real-Time GPS Tracking",
    description: "Built-in GPS lets you lock onto your ride’s exact location—anytime, anywhere. Whether you're tearing up a trail or your bike’s parked across town, you’ll know exactly where it is. No dead zones, no second-guessing, just total control..",
  },
  {
    id: 2,
    title: "Custom Ride Modes",
    description: "Switch between Eco, Sport, and Extreme modes on the fly to match your mood or mission. Dial it down to conserve power or unleash max torque when the trail gets wild. Your ride, your rules—always locked and loaded.",
  },
  {
    id: 3,
    title: "Theft Alerts & Remote Lock",
    description: "Motion-triggered alerts and a remote lock system make sure your bike stays yours. Even when you’re not near it, it’s still guarded like a beast in a cage. Try stealing it—good luck with that.",
  }
]

function MobileAPP() {
  return (
    <div className='MobileAppSection'>
        <div className='headerMobileApp'>
            <h2>MOBILE APP AVAILABLE</h2>
            <p>he dedicated mobile app transforms your Electric Off-Road Bike into a connected beast, giving you total control from your pocket .Seamlessly paired via Bluetooth and compatible with both iOS and Android, the app is your personal command center—built for riders who don’t just ride, but ride smart.</p>
        </div>
        <div className='MobileAppImages'>
            <img src="./src/assets/MBLAPP-IMG1.png" alt="" />
            <img src="./src/assets/MBLAPP-IMG2.png" alt="" />
        </div>
        <div className='keyPointsMobileApp'>
            {keyPoints.map((keypoint)=>(
                <div className='KeyTable' key={keypoint.id}> 
                <h4>{keypoint.title}</h4>
                <p>{keypoint.description}</p>
                <div className='Icon'>
                    <img src="./src/assets/Arrowicon.svg" alt="" />
                </div>
                
                </div>

            ))}
        </div>
    </div>
  )
}

export default MobileAPP