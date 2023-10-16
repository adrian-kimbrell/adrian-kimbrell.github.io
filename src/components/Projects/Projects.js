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
              title="SEC-Data.io API"
              description="SEC-Data.io was conceived to address the challenges of accessing reliable and comprehensive financial data. Recognizing the limitations of existing solutions, this API was developed using state-of-the-art technology and deep domain expertise in finance. It simplifies access to a broad range of SEC filings and financial data points, streamlining the data retrieval process for financial analysts, investment firms, and data scientists. By combining robust data-scraping techniques with advanced analytics, SEC-Data.io offers a user-friendly yet powerful platform that has quickly become an indispensable tool in the finance industry."
              technologies="Python, Flask, Mysql, Redis"
              demoLink="https://example.com/demo"
              codeLink="https://github.com/username/project2"
              role="Software Project Lead"
            />
          </div>
          <div className='col-md-6'>
            <ProjectBox
              title="Midday Fill"
              description="Developing a personalized news feed platform using NLTK, Python, Flask, CSS, 
              PostgreSQL, Pytorch, and RSS aiming to provide an unbiased news exploration tool tailored to individual interests"
              technologies="Python, PostgresSQL, Flask, Ubuntu, RSS, NLTK, Pytorch"
              demoLink="https://example.com/demo"
              codeLink="https://github.com/username/project1"
              role="Solo creator"
            />
          </div>
          <div className='col-md-6'>
            <ProjectBox
              title="Minecraft AWS Server Balancer"
              description="Designed a cost‐saving solution using Discord’s API, DynamoDB, and Boto3 to manage AWS EC2 instances with a user‐friendly interface."
              technologies="Vue.js, Express, PostgreSQL"
              demoLink="https://example.com/demo"
              codeLink="https://github.com/username/project2"
              role="Solo creator"
            />
          </div>
          <div className='col-md-6'>
            <ProjectBox
              title="HSpeQ API"
              description="Developed a Python‐based API to streamline product key validation and license renewal processes for HSpeQ, a hyperspectral imaging software company."
              technologies="Python, Flask, Mysql, Matlab"
              demoLink="https://example.com/demo"
              codeLink="https://github.com/username/project2"
              role="Solo creator"
            />
          </div>


        </div>
      </div>
    </section >
  );
};

export default Projects;
