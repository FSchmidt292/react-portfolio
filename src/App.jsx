import React from 'react'
import About from './components/about/About.jsx'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import { useState } from 'react';

const App = () => {
  
  const [navSelected, setNavSelected] = useState('About');

  const render = navSelected => {
    switch(navSelected) {
      case 'about':
        return <About></About>
      case 'portfolio':
        return <Portfolio></Portfolio>
      case 'contact':
        return <Contact></Contact>
      default:
    }
  } 
  
  return (
    <>
        <Nav
          navSelected={navSelected}
          setNavSelected={setNavSelected}
        ></Nav>
        <Header />
        <div>
          {render(navSelected)}
        </div>
        <Footer />
        
    </>
  )
}

export default App