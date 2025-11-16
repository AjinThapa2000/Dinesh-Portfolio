import React from 'react';
import classes from './qualification.module.css';
import { MdSchool, MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

const Qualification = () => {
  const timelineData = [
    {
      icon: <FaSchool />,
      title: "Web and Web App Developer",
      duration: "Aug 2024 - Till now",
      description: (
        <>
          Built and maintained responsive, user-friendly websites and Web Applications for{' '}
          <a href="https://tcat.education/" target="_blank" rel="noopener noreferrer">
            <b>Cornerstone Academy Trust</b>
          </a>. Customized WordPress plugins, automated workflows, and integrated REST APIs to streamline processes such as job applications, event management, and content updates.
        </>
      ),
    },
    {
      icon: <MdWork />,
      title: "Front-End Development (remote)",
      duration: "September 2023 - April 2024",
      description: (
        <>
          Worked as <b>Front-End Developer</b> at{' '}
          <a href="https://www.opportumeety.com/" target="_blank" rel="noopener noreferrer">
            <b>Opportumeety</b>
          </a>. A digital platform for Purpose-Driven, Community-Based social networking, fostering community discovery, resilience, and wellbeing.
        </>
      ),
    },
    {
      icon: <FaSchool />,
      title: "Certificate in Front-End Web Development",
      duration: "December 2022 - March 2023",
      description: (
        <>
          Earned a certificate from edX, mastering HTML, CSS, and JavaScript. Group projects include{' '}
          <a href="https://ajinthapa2000.github.io/Food-Cocktails-API/" target="_blank" rel="noopener noreferrer">
            <b>Food-Cocktails</b>
          </a> and{' '}
          <a href="https://monumental-gnome-bdb645.netlify.app/" target="_blank" rel="noopener noreferrer">
            <b>Chill-Corner</b>
          </a>.
        </>
      ),
    },
    {
      icon: <MdWork />,
      title: "Freelancing",
      duration: "August 2021 - September 2022",
      description:
        "Freelance Web Developer with experience designing, developing, and maintaining web applications using Django, Python, HTML, CSS, JavaScript, Node.js, and React.",
    },
    {
      icon: <MdWork />,
      title: "Django Web Developer",
      duration: "March 2021 - July 2021",
      description: (
        <>
          Internship at{' '}
          <a href="https://bihanitech.com/" target="_blank" rel="noopener noreferrer">
            <b>Bihani Tech</b>
          </a>, gaining hands-on skills developing robust web applications using Django framework.
        </>
      ),
    },
    {
      icon: <MdWork />,
      title: "Junior System Analyst",
      duration: "2020 - 2021",
      description:
        "Worked on National Identity card project at Government of Nepal, supporting design, development, implementation, and maintenance of information systems.",
    },
    {
      icon: <MdSchool />,
      title: "Bachelor in Computer Science and IT",
      duration: "2016 - 2020",
      description:
        "Graduated with a degree covering IT management, systems analysis, network administration, programming, database management, and web development.",
    },
  ];

  return (
    <section className={`${classes.qualification} section`}>
      <div className="container">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className={classes.timeline}>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`${classes.timeline_entry} ${
                index % 2 === 0 ? classes.left : classes.right
              }`}
            >
              <div className={classes.timeline_icon}>{item.icon}</div>
              <div className={classes.timeline_content}>
                <h3>{item.title}</h3>
                <span className={classes.timeline_date}>{item.duration}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
