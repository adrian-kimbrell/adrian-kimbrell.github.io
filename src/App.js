// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <AboutMe />
      <Projects />

      <Contact />
      <Footer />
      {/* Add more sections as needed */}
    </div>
  );
};

export default App;
