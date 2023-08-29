// AboutMe.js
import React from 'react';
import './AboutMe.css';
import adrian from '../../assets/adrian.png';

const AboutMe = () => {
  return (
    <section id="about" className='aboutme'>
      <div className="container">
        <div className="row aboutme-title-row">
          <div className='col-md-6  aboutme-image-container'>
            <img className='aboutme-image' src={adrian} />
          </div>
          <div className="col-md-6">
            <h2 className='aboutme-title'>About me</h2>
            <p className='aboutme-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more</p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutMe;
