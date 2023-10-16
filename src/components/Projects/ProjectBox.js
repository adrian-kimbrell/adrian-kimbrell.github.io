// Project.js
import React, { useState } from 'react';

import './projectbox.css';

const ProjectBox = ({ title, description, technologies, demoLink, codeLink, role }) => {


const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="projectbox">
      <h3>{title}</h3>
      <hr></hr>
      {expanded ? <p>{description}</p> : <p>{description.slice(0, 100)}...</p>}
      <button onClick={toggleDescription} className="toggle-button">
        {expanded ? 'Read less' : 'Read more'}
      </button>
      
      <p>Role: {role}</p>
      <p>Technologies: {technologies}</p>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default ProjectBox;
