import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_krvnkgm', 'template_5ygfm2a', form.current, 'm0ArX1RGtYjCDbEFq')
      .then((result) => {
        console.log(result.text);
      }, (error) =>{
        console.log(error.text);
      });
  };

  return (
    <section id='contact' className='section1'>
      <h1> Contact me!</h1>
      <p>Send me a message through your email client by clicking the link OR type your message here in the browser</p>
        <div className="container contact__container">
          
            <div className="email">
              <h3>FJschmidt292@gmail.com</h3>
              <a href="mailto:FJschmidt292@gmail.com">Send a Message</a>
            </div>
            <div className="submissionForm">
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Your Name Here!' required />
              <input type='email' name='email' placeholder='Your eMail Here!' required />
              <textarea name='message' placeholder='Your Message Here!' required></textarea>
              <button type='submit' className='btn'>Send Message</button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Contact