// Project.js
import React from 'react';
import './projectbox.css';

const ProjectBox = ({ title, description, technologies, demoLink, codeLink }) => {
  return (
    <div className="projectbox">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Technologies: {technologies}</p>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default ProjectBox;
