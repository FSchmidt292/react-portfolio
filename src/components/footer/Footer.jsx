import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {ImStackoverflow} from 'react-icons/im'


const Footer = () => {
  return (
    <footer id='footer'>
      <div className="links">
      <a href="https://www.linkedin.com/in/francis-schmidt-059621176/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://www.github.com/FSchmidt292" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://stackoverflow.com/users/17818942/fjschmidt292/" target="_blank" rel="noreferrer"><ImStackoverflow /></a>
      </div>
    </footer>
  )
}

export default Footer