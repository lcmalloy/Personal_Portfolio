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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a eius cupiditate totam minus aperiam, consequatur necessitatibus similique, sit voluptate ab voluptatem illo deserunt aut exercitationem dolor rerum consequuntur! Officiis.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about