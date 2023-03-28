import React from 'react'

import quick_bytez from '../../assets/quick bytez.jpg'
import e7 from '../../assets/e7.jpg'
import A6i6as from '../../assets/A6i6as.png'
import GameBox from '../../assets/game-box.jpeg'
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
    image: quick_bytez,
    title: 'Quick Bytez',
    github: "https://github.com/lcmalloy/Quick-Bytez",
    demo: "https://lcmalloy.github.io/Quick-Bytez/"
  },
  {
    id: 3,
    image: A6i6as,
    title: 'A6i6as',
    github: "https://github.com/lcmalloy/A6i6as",
    demo: ""
  },
  {
    id: 4,
    image: GameBox,
    title: 'Game-Box',
    github: "https://github.com/lcmalloy/Game-Box",
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
            {project.demo !== "" && (
              <a href={project.demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
             )
            }
          </div>
        </article>
      ))}
      </div>
    </section>
  )
}

export default Portfolio