import React, { useState } from 'react';
import './test.css'; // Create a CSS file for styling
import SkillBox from './SkillBox'; // Import the SkillBox component

const ExpandableTable = () => {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (index) => {
    const updatedRows = [...expandedRows];
    if (updatedRows.includes(index)) {
      updatedRows.splice(updatedRows.indexOf(index), 1);
    } else {
      updatedRows.push(index);
    }
    setExpandedRows(updatedRows);
  };

  const isRowExpanded = (index) => expandedRows.includes(index);

  const skillsData = [
    {
      title: 'Languages',
      description: 'Your description for Languages',
      technologies: 'List of languages',
    },
    {
      title: 'Tools',
      description: 'Your description for Tools',
      technologies: 'List of tools',
    },
    {
      title: 'Testing',
      description: 'Your description for Testing',
      technologies: 'List of testing tools',
    },
    {
      title: 'Web',
      description: 'Your description for Web',
      technologies: 'List of web-related technologies',
    },
  ];

  return (
    <table className="expandable-table">
      <thead>
        <tr>
          <th>Languages</th>
          <th>Tools</th>
          <th>Testing</th>
          <th>Web</th>
        </tr>
      </thead>
      <tbody>
        {skillsData.map((skill, index) => (
          <tr key={index} className={isRowExpanded(index) ? 'expanded' : ''}>
            <td>
              <SkillBox
                title={skill.title}
                description={skill.description}
                technologies={skill.technologies}
              />
            </td>
            <td>
              <SkillBox
                title={skill.title}
                description={skill.description}
                technologies={skill.technologies}
              />
            </td>
            <td>
              <SkillBox
                title={skill.title}
                description={skill.description}
                technologies={skill.technologies}
              />
            </td>
            <td>
              <SkillBox
                title={skill.title}
                description={skill.description}
                technologies={skill.technologies}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpandableTable;
