import React from 'react'
import './Award.css'
import awardsImg from '../assets/Awards.svg'   // ✅ import image properly

function Award() {
  return (
    <div className='AwardSection'>     

        <div className='AwardText'>
            <h4>A REIMAGINED FORM</h4>
            <p>
              The Electric Off-Road Bike is designed with an aggressive, industrial aesthetic that reflects its raw performance and rugged purpose. Its frame features sharp, angular geometry crafted from aerospace-grade aluminum alloy, combining strength with agility for tackling extreme terrains. Finished in matte, earth-toned powder coatings, it embraces dirt, scratches, and the wild—looking even better after a ride through mud or dust.
            </p>
        </div>

        <div className='productAward'>
            <h4>PRODUCT AWARD</h4>
            <img src={awardsImg} alt="Product Awards" />
        </div>

    </div>
  )
}

export default Award
