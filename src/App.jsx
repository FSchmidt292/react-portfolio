import React from 'react'
import About from './components/about/About.jsx'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
    <>
        <Nav />
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App