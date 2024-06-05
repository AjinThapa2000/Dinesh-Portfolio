import React from 'react';
import classes from './qualification.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

const Qualification = () => {
  return (
    <section className="qualification section">
        <div className="qualification__container container">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>
        <div className={classes.box} id='education'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_6}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Front-End Development (remote) <span>September 2023-April 2023</span>
                      </h2>
                      <p>
                        Worked as <b>Front-End Development</b> at{' '}
                        <a target='_blank' href='https://www.opportumeety.com/'>
                          <b>Opportumeety</b>
                        </a>{' '}
                        <i>
                          (is a digital platform for Purpose-Driven, and Community-Based social
                            Networking. For personal fulfillment and purpose realization. To foster community discovery,
                            resilience and wellbeing. A space to reconnect with each other and with nature, to restart
                            balance in the Digital Age, and finally, to overcome the global challenges as a global
                            community. With the aim to make a joyful and sustainable world.)
                        </i>{' '}
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}

<article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Frelancing <span>April 2021-Augest 2023</span>
                      </h2>
                      <p>
                      Freelance Web Developer with year of experience in designing, developing, and maintaining web applications for a diverse range of clients. 
                      Proficient in multiple programming languages and frameworks, including Django, Python, HTML, CSS, JavaScript, Node.js and React. Adept at 
                      managing all phases of the project lifecycle, from initial client consultation to final deployment and maintenance.
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Certificate in Front-End Web Development <span>December 2022- March 2023</span>
                      </h2>
                     
                      <p>
                        Earned a "Certificate in Front-End Web Development" from edX, mastering HTML, CSS,
                         nd JavaScript for website creation. Our group project involves crafting APIs for <a target='_blank' href='https://ajinthapa2000.github.io/Food-Cocktails-API/'><b>"Food-Cocktails"</b> </a>
                        (providing recipes) and <a target='_blank' href='https://monumental-gnome-bdb645.netlify.app/'><b>"Chill-Corner"</b></a> (offering relaxation music playlist based on user selected mode).
                      </p>
                     
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      
                      <h2>
                        Django Web Developer  <span> March 2021- July 2021</span>
                      </h2>
                      
                      <p>
                       Working as Django Web Developer (internship) at <a target='_blank' href='https://bihanitech.com/'><b>Bihani Tech</b></a> I got opportunity to gain valuable hands-on skills in developing
                        robust web applications using the Django framework exposed to real-world projects and had the opportunity to collaborate with a talented team of developers. {' '}
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Junior System Analyst <span>2020-2021</span>
                      </h2>
                     
                      <p>
                        Working as junior analyst in National Identity card at Government of Nepal (Minister of Home Affairs). I undertook responsibilites like Supporting the design, development, implementation, and
                        maintenance of information systems that meet the business
                        needs of the organization.
                      </p>
                     
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>Bachelor in Computer Science and Information Technology <span> 2016- 2020</span></h2>
                      <p> I did graduate 4 Year's course that is design to builds up the skills that are essential for both computer professionals and researchers
                         including IT managers, Systems Analysts, Network Administrator, Computer Programmers, Database Administrator, 
                         Web Developers, etc.
                      </p>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
        </div>
        
        
    </section>
  )
}

export default Qualification