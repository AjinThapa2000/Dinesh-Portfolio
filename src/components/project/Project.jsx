import React from 'react'
import Tilt from 'react-parallax-tilt';
import 'animate.css/animate.min.css';
import classes from'./project.module.css';
import Proj1 from "../../assets/img1.png";
import Proj2 from "../../assets/img2.PNG";
import Proj3 from "../../assets/img3.png";
import Proj4 from "../../assets/img4.PNG";
import Proj5 from "../../assets/img5.gif";
import Proj6 from "../../assets/img6.png";
import github from '../../assets/github.png'
import './project.module.css';


const Project = () => {
    const project = [
        {
          name: "Wrok Scheduler",
          image: Proj1,
          description: 'This website application is a straightforward daily planner intended to assist users in planning their workdays.',
          stack: ['localstorage', 'Clock', 'User input note'],
          color: '#C1A4AA',
          sourceCode: 'https://github.com/AjinThapa2000/work-scheduler',
          livePreview: 'https://ajinthapa2000.github.io/work-scheduler/'
          
        },
        {
          name: "Password Generator",
          image:Proj2,
          description:
          'Unique Password Generator is program that generate unique strong password for your security. Password of length 64 char can be create using this program.',
          stack: ['FrontEnd','Character Combination','Password Length'],
          color: '#0FFFFF',
          sourceCode: 'https://github.com/AjinThapa2000/Unique-Password-Generetor',
          livePreview:'https://ajinthapa2000.github.io/Unique-Password-Generetor/'
        },
        {
          name: "WeatherForecast",
          image:Proj3,
          description:'View 5 days weather forecast of the city based on your search input.',
          stack: ['localstorage', 'Openweather API', 'Google Map API'],
          color: '#E5E483',
          sourceCode: 'https://github.com/AjinThapa2000/WeatherForecast',
          livePreview:'https://ajinthapa2000.github.io/WeatherForecast/'
        },
        {
          name: "Time Quiz",
          image:Proj4,
          description:'Play time Quiz and obtain high score based on given time clock',
          stack: ['Frontend', 'Option Selection','Clock Timeout'],
          color: '#D2E0FB',
          sourceCode: 'https://github.com/AjinThapa2000/Play-Time-Quiz',
          livePreview:'https://ajinthapa2000.github.io/Play-Time-Quiz/'
        },
        {
          name: "README_Generator",
          image:Proj5,
          description:'Create dynamic readme file for your project.',
          stack: ['nmp-i','node-16','Command-line Readme'],
          color: '#FEA1A1',
          sourceCode: 'https://github.com/AjinThapa2000/Dynamically-generated-ReadMe'
        },
        {
          name: "Food-Cocktails-API",
          image:Proj6,
          description:'Get instruction about how to make different food and cocktails at home.',
          stack: ['Food-API', 'Cocktails-API', 'Local storage'],
          color: '#D3D3D3',
          sourceCode: 'https://github.com/AjinThapa2000/Food-Cocktails-API/settings/pages',
          livePreview:'https://ajinthapa2000.github.io/Food-Cocktails-API/'
        },
      
        
      ];
  const getProjectCard = (cardItem) => {    
  return (
    <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
          <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
            <a href={cardItem.livePreview} className={classes.card} target='_blank'>
              <img src={cardItem.image} className={classes.card__image} alt='' />
            </a>
            <div
              onClick={() => {
                if (cardItem?.sourceCode) window.open(cardItem?.sourceCode, '_blank');
              }}
              className={classes.card__title__container}
            >
              <h3 className={classes.card__title}>{cardItem.name}</h3>
              {cardItem?.sourceCode && <img src={github} className={classes.card__title__img} />}
            </div>
          </li>
        </Tilt>
    );
}
return (
  <section className="project section" id="project">
    <h2 className="section__title">My Project Gallary </h2>
    <span className="section__subtitle">Exploring Creativity</span>
    <div className="project__container container ">
      <div className="project__content">
        <div className={classes.box} id='projects'>
          {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
          > */
          } 
            
          <ul className={classes.cards}>
            {project.map((item) => {
              return getProjectCard(item);
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

    
    

  
}

export default Project




  