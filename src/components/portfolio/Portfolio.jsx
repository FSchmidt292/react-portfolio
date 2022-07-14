import React from 'react'
import './portfolio.css'
import Project from '../project/Project.jsx'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h1>Portfolio</h1>
      <h3>Some of my key projects</h3>
        <div className='projectContainer'>
          
            <Project />
          
        </div>
    </section>
  )
}

export default Portfolio