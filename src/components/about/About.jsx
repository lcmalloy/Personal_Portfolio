import React from 'react'

import { FaAward, FaServer } from 'react-icons/fa'
import cos1 from '../../assets/cos1.jpg'
import './about.scss'


const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={cos1} alt="me img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Frontend Development</small>
            </article>
            <article className="about__card">
              <FaServer className="about__icon"/>
              <h5>Experience</h5>
              <small>Backend Development</small>
            </article>
          </div>
          <p>Full Stack software engineer with a Bachelor's from University of California, Davis. Previously a IT professional, I am passionate about building intuitive, user-friendly applications and I enjoy the process of problem solving to creatively find solutions. I am skilled in JavaScript, TypeScript, React, Web Design, and Systems Design.</p>
          <p>When I am not coding, I enjoy playing video games, watching movies, and doing photography!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about