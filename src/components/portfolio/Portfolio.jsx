import React from 'react'

import proj1 from '../../assets/littleLemon.png'
import e7 from '../../assets/e7.jpg'
import './portfolio.scss'

const projects = [
  {
    id: 1,
    image: e7,
    title: 'E7 Content Manager',
    github: "https://github.com/lcmalloy/E7",
    demo: "https://lcmalloy.github.io/E7/",
  },
  {
    id: 2,
    image: proj1,
    title: 'Little Lemon',
    github: "https://github.com/",
    demo: ""
  },
]

const Portfolio = () => {

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {projects.map((project) =>  (
        <article className="portfolio__item" key={project.id}>
          <div className="portfolio__item-image">
            <img src={project.image} alt={project.title} />
          </div>
          <h3>{project.title}</h3>
          <div className="portfolio__item-CTA">
            <a href={project.github} className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href={project.demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      ))}
      </div>
    </section>
  )
}

export default Portfolio