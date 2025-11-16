import React from 'react';
import Tilt from 'react-parallax-tilt';
import 'animate.css/animate.min.css';
import classes from './project.module.css';
import Proj1 from "../../assets/img1.png";
import Proj2 from "../../assets/img2.PNG";
import Proj3 from "../../assets/img3.png";
import Proj4 from "../../assets/img4.PNG";
import Proj5 from "../../assets/img5.gif";
import Proj6 from "../../assets/img6.png";
import Proj7 from "../../assets/cornerstone.png";
import github from '../../assets/github.png';

const projects = [
  {
    name: "Cornerstone Academy Trust",
    image: Proj7,
    description: 'A school website serving as an online hub for students, parents, and teachers with essential info, resources, and communication tools.',
    stack: ['LocalStorage', 'Clock', 'User Input Note'],
    color: '#003848',
    livePreview: 'https://tcat.education/'
  },
  {
    name: "Work Scheduler",
    image: Proj1,
    description: 'A simple daily planner to help users organize their workday.',
    stack: ['LocalStorage', 'Clock', 'User Input Note'],
    color: '#C1A4AA',
    sourceCode: 'https://github.com/AjinThapa2000/work-scheduler',
    livePreview: 'https://ajinthapa2000.github.io/work-scheduler/'
  },
  {
    name: "Password Generator",
    image: Proj2,
    description: 'Generates unique strong passwords up to 64 characters for maximum security.',
    stack: ['Frontend', 'Character Combination', 'Password Length'],
    color: '#0FFFFF',
    sourceCode: 'https://github.com/AjinThapa2000/Unique-Password-Generetor',
    livePreview:'https://ajinthapa2000.github.io/Unique-Password-Generetor/'
  },
  {
    name: "Weather Forecast",
    image: Proj3,
    description:'View 5-day weather forecasts for any city.',
    stack: ['LocalStorage', 'OpenWeather API', 'Google Map API'],
    color: '#E5E483',
    sourceCode: 'https://github.com/AjinThapa2000/WeatherForecast',
    livePreview:'https://ajinthapa2000.github.io/WeatherForecast/'
  },
  {
    name: "Time Quiz",
    image: Proj4,
    description:'Play time-based quizzes and score points before the clock runs out.',
    stack: ['Frontend', 'Option Selection', 'Clock Timeout'],
    color: '#D2E0FB',
    sourceCode: 'https://github.com/AjinThapa2000/Play-Time-Quiz',
    livePreview:'https://ajinthapa2000.github.io/Play-Time-Quiz/'
  },
  {
    name: "README Generator",
    image: Proj5,
    description:'Create dynamic README files for your projects.',
    stack: ['npm', 'Node.js', 'Command-line Readme'],
    color: '#FEA1A1',
    sourceCode: 'https://github.com/AjinThapa2000/Dynamically-generated-ReadMe'
  },
  {
    name: "Food-Cocktails API",
    image: Proj6,
    description:'Get instructions on making different foods and cocktails at home.',
    stack: ['Food API', 'Cocktails API', 'Local Storage'],
    color: '#D3D3D3',
    sourceCode: 'https://github.com/AjinThapa2000/Food-Cocktails-API/settings/pages',
    livePreview:'https://ajinthapa2000.github.io/Food-Cocktails-API/'
  }
];

const Project = () => {
  return (
    <section className="project section" id="project">
      <h2 className="section__title">My Project Gallery</h2>
      <span className="section__subtitle">Exploring Creativity</span>

      <div className="project__container container">
        <ul className={classes.cards}>
          {projects.map((item, index) => (
            <Tilt key={index} perspective={900} glareEnable={true} glareMaxOpacity={0.3}>
              <li 
                className={classes.cardWrapper} 
                style={{ backgroundColor: item.color }}
              >
                <a href={item.livePreview || '#'} className={classes.cardLink} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} className={classes.cardImage} alt={item.name} />
                </a>
                <div className={classes.cardInfo}>
                  <h3 className={classes.cardTitle}>{item.name}</h3>
                  {item.sourceCode && <img src={github} className={classes.githubIcon} alt="Github Link" onClick={() => window.open(item.sourceCode, '_blank')} />}
                  <p className={classes.cardDescription}>{item.description}</p>
                </div>
              </li>
            </Tilt>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Project;
