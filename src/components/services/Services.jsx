import React, {useState} from 'react'
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] =useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services </h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                     <i className="uil uil-web-grid services__icon"></i>
                     <h3 className="services__title">Responsive Website <br /> Development</h3>
                </div>

                <span className="services__button" onClick={() => 
                toggleTab(1)}>View more
                <i className="uil uil-arrow-right services__button-icon"></i>
                
                </span>

                <div className={toggleState ===1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Responsive Web Development</h3>
                        <p className="services__modal-description">creating websites that adapt and display 
                        optimally across various devices and screen sizes. </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I
                                develop Responsive Design Strategy</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Mobile-First Approach</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Fluid Grid Layouts</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Flexible images and Media</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Content Prioritization</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                     <i className="uil uil-arrow services__icon"></i>
                     <h3 className="services__title">Ui/Ux <br /> designer</h3>
                </div>

                <span className="services__button" onClick={() => 
                toggleTab(2)}>View more
                <i className="uil uil-arrow-right services__button-icon"></i>
                
                </span>

                <div className={toggleState ===2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">Services
                        aimed at creating intutive, engaging, and visually appealing
                        user interface that prioritize user experience </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Creating user research for user
                                behaviours, need and pain points.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                User Journey Mapping for Visualizing the end-to-end user experience</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Wireframing to outline layout</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Responsive and Adaptive Design</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Product Strategy Alignment
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                     <i className="uil uil-edit services__icon"></i>
                     <h3 className="services__title">Progressive Web App <br />Development</h3>
                </div>

                <span className="services__button" onClick={() => 
                toggleTab(3)}>View more
                <i className="uil uil-arrow-right services__button-icon"></i>
                
                </span>

                <div className={toggleState ===3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Progressive Web App (PWA) Development</h3>
                        <p className="services__modal-description"> Give best features of web and mobile applications to 
                        deliver fast, reliable, and engaging user experiences. </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Fast Loading Times
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Push Notification</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Secure HTTPS Connection</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Cross-Browser Compatibility</p>
                            </li>

                           
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Services