import React from 'react'
import './nav.css'

function Nav(props) {
  const {
      setNavSelected
  } = props;
  return(
      <nav>
          <ul className='d-flex flex-row navbar-nav'>
              <li 
                  className='nav-item mx-3 ' 
                  onClick={() => setNavSelected('about')}>
                      About
              </li>
              <li 
                  className='nav-item mx-3' 
                  onClick={() => setNavSelected('portfolio')}>
                      Portfolio
              </li>
              <li 
                  className='nav-item mx-3' 
                  onClick={() => setNavSelected('contact')}>
                      Contact
              </li>
          </ul>

      </nav>
  );
};

/*const Nav = () => {
  return (
    <nav>
      <a href="#about">About Me</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}
*/
export default Nav