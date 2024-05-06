import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Dinesh</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">
                        About
                    </a>
                </li>

                <li>
                   <a href="#services" className="footer__link">
                       Service
                    </a>
                </li>

                <li>
                   <a href="#project" className="footer__link">
                       Project
                    </a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://github.com/AjinThapa2000" target="_blank" className="footer__social-link" >
                    <i class='uil uil-github-alt'></i>
                </a>
                <a href="https://www.linkedin.com/in/dinesh-thapa-391999253/" target="_blank" className="footer__social-link">
                    <i class='uil uil-linkedin-alt'></i>
                </a>
            </div>

            <span className="footer__copy">
                @2024 Dinesh Thapa
            </span>
        </div>
        
    </footer>
  )
}

export default Footer