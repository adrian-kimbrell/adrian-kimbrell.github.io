import React, { useState } from 'react';
import './skillbox.css'

const SkillBox = ({ title, description, technologies, demoLink, codeLink }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="skillbox">
      <h3>{title}</h3>
      <hr></hr>
      {expanded ? <p>{description}</p> : <p>{description.slice(0, 100)}...</p>}
      <button onClick={toggleDescription} className="toggle-button">
        {expanded ? 'Read less' : 'Read more'}
      </button>
      <p>Familiar tools: {technologies}</p>
    </div>
  );
};

export default SkillBox;
