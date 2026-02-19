import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Features from "./Components/Features"
import PowerFeatures from "./Components/PowerFeatures"
import './App.css'
import Award from './Components/Award'
import MobileAPP from "./Components/MobileAPP"
import Testimonials from "./Components/Testimonials"
import RegisterSection from "./Components/RegisterSection"
import Footer from './Components/Footer'

function App() {
  return (
    <div className="AppComp">
      <div><Navbar/></div>
      <div> <Hero/> </div>
      <div><Features/></div>
      <div><PowerFeatures/></div>
      <div><Award/></div>
      <div><MobileAPP/></div>
      <div><Testimonials/></div>
      <div><RegisterSection/></div>
      <div><Footer/></div>
    </div>
    
  )
}

export default App