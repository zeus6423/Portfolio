import React from 'react'
import CV from "../../assets/ShantanuPCV.pdf"

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn' > Download CV </a>
      <a href="#contact" className='btn btn-primary' >Let's Talk</a>
      <a href="#contact" className="scroll__down">Scroll down</a>
    </div>
  )
}

export default CTA
