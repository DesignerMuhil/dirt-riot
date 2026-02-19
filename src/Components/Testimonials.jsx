import React, { useState } from 'react'
import './Testimonials.css'

import profile1 from '../assets/Profile1.jpg'
import profile2 from '../assets/Profile2.jpg'
import profile3 from '../assets/Profile3.jpg'
import profile4 from '../assets/Profile4.jpg'
import profile5 from '../assets/Profile5.jpg'

import prevBtn from '../assets/PrevBtn.svg'
import nextBtn from '../assets/NextBtn.svg'

const testimonials = [
  {
    id: 1,
    quote: "DirtRiot completely changed my off-road experience. The torque is insane, and the silent electric power makes every trail feel futuristic.",
    name: "Laila S., Trail Slayer",
    title: "“Handles like a dream even in loose gravel. Absolute game-changer.”",
    image: profile1
  },
  {
    id: 2,
    quote: "The instant acceleration on my DirtRiot is addictive. I barely miss my old gas bike anymore.",
    name: "Arjun K., Weekend Warrior",
    title: "“Pure power with zero noise. It feels unreal.”",
    image: profile2
  },
  {
    id: 3,
    quote: "Battery life surprised me the most. I pushed it through rocky trails for hours and it never backed down.",
    name: "Meera R., Adventure Rider",
    title: "“Built tough. Rides smooth. No compromises.”",
    image: profile3
  },
  {
    id: 4,
    quote: "The suspension and control make steep climbs feel effortless. DirtRiot is engineered for serious terrain.",
    name: "Rahul V., Motocross Enthusiast",
    title: "“Stability at high speed is insane.”",
    image: profile4
  },
  {
    id: 5,
    quote: "Low maintenance, zero emissions, and ridiculous performance. DirtRiot is the future of off-road riding.",
    name: "Priya N., Outdoor Creator",
    title: "“Eco-friendly without losing the thrill.”",
    image: profile5
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className='TestimonialSection'>
      <p>SEE OUR CLIENTS FEEDBACK</p>

      <div className='TestimonialCardContainer'>
        <div className='TestimonialCard'>
          <img 
            src={testimonials[currentIndex].image} 
            alt={testimonials[currentIndex].name} 
          />

          <div className='TestimonialCardText'>
            <h2>{testimonials[currentIndex].title}</h2>
            <h4>{testimonials[currentIndex].quote}</h4>
            <h3>{testimonials[currentIndex].name}</h3>
          </div>
        </div>

        <div className='NavButtons'>
          <button className='NextPrevBtn' onClick={handlePrev}>
            <img src={prevBtn} alt="Previous" />
          </button>

          <button className='NextPrevBtn' onClick={handleNext}>
            <img src={nextBtn} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
