import React from 'react'
import '../about/About.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {PiFoldersDuotone} from 'react-icons/pi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

      

      <div className="about__content">

        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3 year learning</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small> 100+ clients </small>
          </article>

          <article className='about__card'>
            <PiFoldersDuotone className='about__icon'/>
            <h5>Projects </h5>
            <small> 5+ completed</small>
          </article>
        </div>

        <p>Hello, I'm Shantanu Pardeshi, a third-year student at Pune Institute of Computer Technology, where I am pursuing a Bachelor's 
          degree in Computer Engineering. My passion for technology has led me to explore various programming languages and tools, 
          including HTML, CSS, React.js, Java , C++ , Flutter . Additionally, I am currently delving into the fascinating world of data structures, 
          constantly striving to expand my knowledge and skills in the field of computer engineering
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>

      </div>

      </div>

    </section>
  )
}

export default About
