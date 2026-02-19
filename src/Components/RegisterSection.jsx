import React, { useState, useEffect } from 'react'
import './RegisterSection.css'
import img1 from '../assets/Gallery1.jpg'
import img2 from '../assets/Gallery2.jpg'
import img3 from '../assets/Gallery3.jpg'
import img4 from '../assets/Gallery4.jpg'

const images = [img1, img2, img3, img4]

function RegisterSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: ''
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    console.log(formData)
    alert('Registration Successful!')
  }

  return (
    <div className='RegisterSection'>
      <div className='GalleryWrapper'>
        <img className='GalleryImage' src={images[currentIndex]} alt="gallery" />
      </div>
      <div className='FormSide'>
          <h2>WANT TO BUY A BIKE?</h2>
          <div className='FormRow'>
              <input 
                  type="text" 
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
              />
              <input 
                  type="number" 
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
              />
          </div>
          <input 
              type="text" 
              name="contact"
              placeholder="E-mail / Phone"
              value={formData.contact}
              onChange={handleChange}
          />
          <button className='RegisterBtn' onClick={handleSubmit}>
              REGISTER NOW
          </button>
      </div>
    </div>
  )
}

export default RegisterSection