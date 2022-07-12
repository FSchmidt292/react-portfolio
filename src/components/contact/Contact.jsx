import React from 'react'
import './contact.css'


const Contact = () => {
  return (
    <div id='contact'>
      <div className="container contact__container">
        <h1> Contact me!</h1>
          <form action="mailto:fjschmidt292@gmail.com">
            <input type="name"></input>
            <input type="email"></input>
            <input type="message"></input>
          </form>
        </div>
    </div>
  )
}

export default Contact