import React from 'react';
import './Portfolio.css'; // Import your CSS file for styling
import classroom from "../images/classroom.png";

// import project1 from '../../images/project1.png'; // Import your project images
// import apiQuiz from '../../images/apiQuiz.png';
// import pwa from '../../images/pwa.png';
// import mvc from '../../images/mvc.png';

const projects = [
  {id: 1,
    
    name: 'Academy of Math and Science Tech Teacher Website',
    description: 'Developing a classroom website is a dynamic and interactive process aimed at creating a virtual platform that supports educational activities and enhances the learning experience for students and teachers alike. This website serves as a central hub where teachers can share course materials, assignments, resources, and announcements, while students can access these materials, participate in discussions, submit assignments, and engage in collaborative projects.',
    repo: 'https://github.com/kpetrosky/my-class-website',
    deployed: 'https://dry-mesa-29236-b7748dc788e2.herokuapp.com/',
    src: classroom,
    toolsUsed: '',
  
  },

  {
    id: 1,
    name: 'Daily Distractions',
    description: 'Welcome to Daily Distractions...',
    repo: 'https://github.com/AlexWatabe9/DailyDistractions',
    deployed: 'https://alexwatabe9.github.io/DailyDistractions/',
    // src: project1,
    backgroundColor: '#e5446dff',
    toolsUsed: '',
  },
  {
    id: 2,
    name: 'Web APIs Code Quiz',
    description: 'Code Quiz is an interactive web application...',
    repo: 'https://github.com/kpetrosky/web-apis-application-code-quiz',
    deployed: 'https://kpetrosky.github.io/web-apis-challenge-code-quiz/',
    // src: apiQuiz,
    backgroundColor: '#ff9474ff',
    toolsUsed: 'Tools: Express.js, Node.js, JavaScript, JSON, Heroku',
  },
  {
    id: 3,
    name: 'Progressive-Web-Applications-PWA-Text-Editor',
    description: 'Launching the text editor application from...',
    repo: 'https://github.com/kpetrosky/Progressive-Web-Applications-PWA-application-Text-Editor',
    deployed: 'https://lit-sands-84115.herokuapp.com/',
    // src: pwa,
    backgroundColor: '#cbc0d3ff',
    toolsUsed: 'Tools: Express.js, Node.js, JavaScript, JSON (JavaScript Object Notation)',
  },
  {
    id: 4,
    name: 'Full stack MVC with handlebars, express, SQL',
    description: 'In the world of technology, writing about...',
    repo: 'https://github.com/kpetrosky/MVC-Model-View-Controller-MVC-application-Tech-Blog',
    deployed: 'https://frozen-lake-62666.herokuapp.com/',
    // src: mvc,
    backgroundColor: '#a74482ff',
    toolsUsed: 'Express.js, APIs, Handlebars.js, Sequelize, Heroku.',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-content">
        <h2>Our Portfolio</h2>
        <p>Take a look at some of our recent web design projects:</p>
        <div className="portfolio-items">
          {projects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <img src={project.src} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
              <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                View Deployed
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
