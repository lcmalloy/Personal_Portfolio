import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">Lawrence Malloy</a>
      <ul className="permalinks">
        <li><a href="/#"> Home</a></li>
        <li><a href="#about"> About</a></li>
        <li><a href="#experience"> Experience</a></li>
        <li><a href="#portfolio"> Portfolio</a></li>
        <li><a href="#contact"> Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/lawrence-malloy/"><BsLinkedin/></a>
        <a href="https://github.com/lcmalloy"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lawrence Malloy</small>
      </div>
    </footer>
  )
}

export default Footer