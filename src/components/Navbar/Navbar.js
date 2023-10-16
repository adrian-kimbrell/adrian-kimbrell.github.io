import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBurger } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'; // Make sure to import your CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-left">
        <span className="navbar-name">Adrian Kimbrell</span>
      </div>
      <div className={`navbar-right ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About Me
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBurger} className={`icon ${menuOpen ? 'active' : ''}`} />
      </div>
    </nav>
  );
};

export default Navbar;
