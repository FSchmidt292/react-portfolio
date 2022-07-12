import React from 'react'
import './header.css'
import prof from '../../assets/prof-photo2.jpg'
//import Nav from './nav/Nav.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello from</h5>
      <h1>FRANCIS SCHMIDT</h1>
      <h5 className="text-light">Software Developer</h5>
      </div>
      
      <div className="prof-photo">
        <img src = {prof} alt="Me smiling in the fall" />
      </div>

      <a href="#contact" className='contact'>Contact information</a>
    </header>
  )
}

export default Header