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

  const closeDropdown = () => {
    setOpenDropdown(null); // Close the dropdown
  };

  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li>
          <Link to="/" onClick={closeDropdown}>Home</Link>
        </li>

        <li className="dropdown">
          <span onClick={() => handleDropdownToggle('about')}>About</span>
          <ul className={`dropdown-content ${openDropdown === 'about' ? 'show' : ''}`}>
            <li><Link to="/about/ceo-message" onClick={closeDropdown}>Message from C.E.O</Link></li>
            <li><Link to="/about/founder-message" onClick={closeDropdown}>Message from Founder</Link></li>
          </ul>
        </li>

        <li><Link to="/mission" onClick={closeDropdown}>Mission</Link></li>
        <li><Link to="/vision" onClick={closeDropdown}>Vision</Link></li>
        <li><Link to="/admission" onClick={closeDropdown}>Admission</Link></li>
        <li><Link to="/contact" onClick={closeDropdown}>Contact</Link></li>

        <li className="dropdown">
          <span onClick={() => handleDropdownToggle('programs')}>Programs</span>
          <ul className={`dropdown-content ${openDropdown === 'programs' ? 'show' : ''}`}>
            <li><Link to="/programs/course1" onClick={closeDropdown}>Course 1</Link></li>
            <li><Link to="/programs/course2" onClick={closeDropdown}>Course 2</Link></li>
            <li><Link to="/programs/course3" onClick={closeDropdown}>Course 3</Link></li>
            <li><Link to="/programs/course4" onClick={closeDropdown}>Course 4</Link></li>
            <li><Link to="/programs/course5" onClick={closeDropdown}>Course 5</Link></li>
            <li><Link to="/programs/course6" onClick={closeDropdown}>Course 6</Link></li>
            <li><Link to="/programs/course7" onClick={closeDropdown}>Course 7</Link></li>
            <li><Link to="/programs/course8" onClick={closeDropdown}>Course 8</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
