// AboutMe.js
import React from 'react';

import ProjectBox from './ProjectBox'

import './projects.css';

const Projects = () => {
  return (
    <section id="projects" className='projects'>
      <h2 className='projects-title'>Projects</h2>
      
      <div className="container">
        <div className="row">
          <div className='col-md-6'>
            <ProjectBox
              title="Midday Fill"
              description="Developing a personalized news feed platform using NLTK, Python, Flask, CSS, 
              PostgreSQL, Pytorch, and RSS aiming to provide an unbiased news exploration tool tailored to individual interests"
              technologies="Python, PostgresSQL, Flask, Ubuntu, RSS, NLTK, Pytorch"
              demoLink="https://example.com/demo"
              codeLink="https://github.com/username/project1"
            />

          </div>
          <div className='col-md-6'>
            <ProjectBox
              title="Minecraft AWS Server Balancer"
              description="Designed a cost‐saving solution using Discord’s API, DynamoDB, and Boto3 to manage AWS EC2 instances with a user‐friendly interface."
              technologies="Vue.js, Express, PostgreSQL"
              demoLink="https://example.com/demo"
              codeLink="https://github.com/username/project2"
            />
          </div>
          <div className='col-md-12'>
            <ProjectBox
              title="HSpeQ API"
              description="Developed a Python‐based API to streamline product key validation and license renewal processes for HSpeQ, a hyperspectral imaging software company."
              technologies="Python, Flask, Mysql, Matlab"
              demoLink="https://example.com/demo"
              codeLink="https://github.com/username/project2"
            />
          </div>
          
        </div>
      </div>
    </section >
  );
};

export default Projects;
