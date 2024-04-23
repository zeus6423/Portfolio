import React from 'react'
import '../header/Header.css'
import CTA from '../header/CTA'
import HeaderSocial from '../../components/header/HeaderSocials'
import ME from '../../assets/me-removebg-preview.png'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shantanu Pardeshi</h1>
        <h5 className="text-light">Flutter Developer</h5>
        <CTA />
        <HeaderSocial  />

      </div>

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      



    </header>
  )
}

export default Header
