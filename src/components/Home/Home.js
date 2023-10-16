import React, { useEffect, useState } from 'react';
import './home.css';
import doodlesImage from '../../assets/doodles.png';
import arrow from '../../assets/Arrow.png';
import python from '../../assets/python.png';
import javascript from '../../assets/javascript.png';
import aws from '../../assets/aws.png';
import html from '../../assets/html.png';
import apis from '../../assets/apis.png';


const Home = () => {
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);

  useEffect(() => {
    const element = document.getElementById('center-element');
    const images = document.querySelectorAll('.knowledge-image');

    const updatePositions = () => {
      const newCenterX = element.offsetLeft + element.offsetWidth / 2;
      const newCenterY = element.offsetTop + element.offsetHeight / 2;

      setCenterX(newCenterX);
      setCenterY(newCenterY);

      images.forEach((image, index) => {
        const angle = (2 * Math.PI * index) / images.length;

        const xOffset = parseInt(image.getAttribute('data-offset-x'), 10) || 0;
        const yOffset = parseInt(image.getAttribute('data-offset-y'), 10) || 0;

        const x = newCenterX + (getRadius() + xOffset) * Math.cos(angle) - image.width / 2;
        const y = newCenterY + (getRadius() + yOffset) * Math.sin(angle) - image.height / 2;

        image.style.position = 'absolute';
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
      });
    };

    const getRadius = () => {
      if (window.innerWidth <= 768) {
        return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mobile-radius'), 10) || 150;
      } else if (window.innerWidth <= 1024) {
        return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--tablet-radius'), 10) || 200;
      } else {
        return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--desktop-radius'), 10) || 250;
      }
    };

    updatePositions();

    window.addEventListener('resize', updatePositions);

    // Force a recalculation after initial render
    setTimeout(updatePositions, 0);

    return () => {
      window.removeEventListener('resize', updatePositions);
    };

    
  }, []);

  return (
    <section id="home" className='home'>
      <div className="container">
        <div className="row home-row">
          <div className="knowledge-images">
            <img src={apis} alt='apis' className="knowledge-image" data-offset-x={30} data-offset-y={10} />
            <img src={aws} alt='aws' className="knowledge-image" data-offset-x={40} data-offset-y={20} />
            <img src={javascript} alt='javascript' className="knowledge-image" data-offset-x={20} data-offset-y={120} />
            <img src={html} alt='html' className="knowledge-image" data-offset-x={20} data-offset-y={120} />
            <img src={python} alt='python' className="knowledge-image" data-offset-x={20} data-offset-y={10} />
          </div>
          <div className="col-md-6 home-title-box">
            <div className='home-title-row ' >
              <div className="home-arrow ">
                <img src={arrow} alt='doodle' />
              </div>
              <div id="center-element">
                <h1 className='home-title'>Software Engineer</h1>
                <button type="button" className="btn home-button home-button-primary">Hire me</button>
                <button type="button" className="btn home-button home-button-secondary btn-primary">Download CV</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 home-image">
            <div className=''>
              <img src={doodlesImage} alt='doodle' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
