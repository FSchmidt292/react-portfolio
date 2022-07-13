import React from 'react'
import './about.css'
import Scuba from '../../assets/scuba.png';

const About = () => {
  return (
    <section id='about' className='section1'>
      <h1>About Me:</h1>
      <div className="container">
        
          <div className="aboutme_img">
            <img src={Scuba} className="aboutImg" alt="me getting my Scuba Certification in an olympic pool"/>
          </div>
          <div className="aboutme">
            <div className="aboutMeCard bio">
              <h3>Bio</h3>
              <p>I'm a fresh bootcamp graduate coming from a Case Western Reserve University Full Stack Development bootcamp. I'm eager to get started!</p>
            </div>
            <div className="aboutMeCard experience">
              <h3>Technologies</h3>
              <p>I have have experience with HTML, CSS, Javascript, MySQL, mongoose, react, node.js, and express.js</p>
            </div>
            <div className="aboutMeCard resume">
              <h3>Resume</h3>
              <a href={require('../../assets/Resume.docx')} download>Download my resume here!</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About