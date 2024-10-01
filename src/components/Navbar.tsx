import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // Close if already open
    } else {
      setOpenDropdown(dropdown); // Open the clicked dropdown
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="dropdown">
          <span onClick={() => handleDropdownToggle('about')}>About</span>
          <ul className={`dropdown-content ${openDropdown === 'about' ? 'show' : ''}`}>
            <li><Link to="/about/ceo-message">Message from C.E.O</Link></li>
            <li><Link to="/about/founder-message">Message from Founder</Link></li>
          </ul>
        </li>

        <li><Link to="/mission">Mission</Link></li>
        <li><Link to="/vision">Vision</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <li className="dropdown">
          <span onClick={() => handleDropdownToggle('programs')}>Programs</span>
          <ul className={`dropdown-content ${openDropdown === 'programs' ? 'show' : ''}`}>
            <li><Link to="/programs/course1">Course 1</Link></li>
            <li><Link to="/programs/course2">Course 2</Link></li>
            <li><Link to="/programs/course3">Course 3</Link></li>
            <li><Link to="/programs/course4">Course 4</Link></li>
            <li><Link to="/programs/course5">Course 5</Link></li>
            <li><Link to="/programs/course6">Course 6</Link></li>
            <li><Link to="/programs/course7">Course 7</Link></li>
            <li><Link to="/programs/course8">Course 8</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
