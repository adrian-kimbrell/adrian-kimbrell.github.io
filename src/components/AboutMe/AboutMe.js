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
            <p className='aboutme-text'>Hello! I'm Adrian Kimbrell, a passionate Full Stack Developer with a knack for creating efficient, scalable, and user-friendly software solutions. My journey in the tech industry spans multiple years and involves a diverse range of projects, from streamlining SaaS products to working on classified government projects. Based in Tucson, Arizona, I am currently serving as a Full Stack Software Engineer and Project Lead at Kaleidoscope..... Read more</p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutMe;
