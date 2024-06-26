import React from 'react'
import '../footer/Footer.css'
import {BsFillEmojiLaughingFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Shantanu Pardeshi</a>


      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experinence</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>Thanks For Visiting ! </small>
        <BsFillEmojiLaughingFill/>
      </div>

    </footer>
  )
}

export default Footer
