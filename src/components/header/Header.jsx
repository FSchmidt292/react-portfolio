import React from 'react'
import './header.css'
import prof from '../../assets/prof-photo2.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello from</h5>
      <h1>FRANCIS SCHMIDT</h1>
      <h5 className="text-light">Software Developer</h5>
      
      
      <div className="prof-photo">
        <div className="img">
        <img src = {prof} alt="Me smiling in the fall" />
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header