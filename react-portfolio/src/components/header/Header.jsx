import React from 'react'

import CTA from './CTA'
import profile from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'
import './header.scss'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lawrence Malloy</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header