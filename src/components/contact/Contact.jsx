import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section  " id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>             
      <div className="contact__card">
        <h3 className="contact__title">If you find anything interesting and would like to talk more</h3>
          <i className="bx bx-mail-send contact__card-icon"></i>
          <h3 className="contact__card-title">Email</h3>
          <span className="contact__card-data">dineshthapa2000@gmail.com</span>
          <a href="mailto:dineshthapa2000@gmail.com" target="_blank" className="contact__button">Write me {' '}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>

      </div> 

    </section>
  )
}

export default Contact