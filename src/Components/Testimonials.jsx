import React, { useState } from 'react'
import './Testimonials.css'


const testimonials = [
  {
    id: 1,
    quote: "DirtRiot completely changed my off-road experience. The torque is insane, and the silent electric power makes every trail feel futuristic.",
    name: "Laila S., Trail Slayer",
    title: "\u201cHandles like a dream even in loose gravel. Absolute game-changer.\u201d",
    image: "./src/assets/Profile1.jpg"
  },
  {
    id: 2,
    quote: "The instant acceleration on my DirtRiot is addictive. I barely miss my old gas bike anymore.",
    name: "Arjun K., Weekend Warrior",
    title: "\u201cPure power with zero noise. It feels unreal.\u201d",
    image: "./src/assets/Profile2.jpg"
  },
  {
    id: 3,
    quote: "Battery life surprised me the most. I pushed it through rocky trails for hours and it never backed down.",
    name: "Meera R., Adventure Rider",
    title: "\u201cBuilt tough. Rides smooth. No compromises.\u201d",
    image: "./src/assets/Profile3.jpg"
  },
  {
    id: 4,
    quote: "The suspension and control make steep climbs feel effortless. DirtRiot is engineered for serious terrain.",
    name: "Rahul V., Motocross Enthusiast",
    title: "\u201cStability at high speed is insane.\u201d",
    image: "./src/assets/Profile4.jpg"
  },
  {
    id: 5,
    quote: "Low maintenance, zero emissions, and ridiculous performance. DirtRiot is the future of off-road riding.",
    name: "Priya N., Outdoor Creator",
    title: "\u201cEco-friendly without losing the thrill.\u201d",
    image: "./src/assets/Profile5.jpg"
  }
];

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = ()=>{
        if(currentIndex < testimonials.length-1){
            setCurrentIndex(currentIndex+1)
        }
    }
    const handlePrev =()=>{
        if(currentIndex > 0){
            setCurrentIndex(currentIndex-1)
        }
    }
  return (
    <div className='TestimonialSection'>
        <p>SEE OUR CLIENTS FEEDBACK</p>
        <div className='TestimonialCardContainer'>
        <div className='TestimonialCard'>
            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
            <div className='TestimonialCardText'>
                <h2>{testimonials[currentIndex].title}</h2>
                <h4>{testimonials[currentIndex].quote}</h4>
                <div>
                    <h3>{testimonials[currentIndex].name}</h3>
                </div>
            </div>
        </div>
        <div>
            <button className='NextPrevBtn'>
                <img onClick={handlePrev} src="./src/assets/PrevBtn.svg" alt="Prev" />
                <img onClick={handleNext} src="./src/assets/NextBtn.svg" alt="Next" />
            </button>
        </div>
        </div>
    </div>
  )
}

export default Testimonials