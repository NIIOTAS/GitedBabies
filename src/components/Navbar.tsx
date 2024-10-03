import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoader } from '../context/LoaderContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsLoading } = useLoader();
  const navigate = useNavigate();

  const handleDropdownToggle = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    
    if (window.location.pathname !== path) { // Only close dropdown when navigating to a different page
      navigate(path);
      setTimeout(closeDropdown, 500);
    } else {
      closeDropdown(); // Close dropdown if you're on the same page (like Home)
    }
  };
  

  const closeDropdown = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <span className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? 'X' : '☰'}
      </span>
      <ul className={`nav-items ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <Link to="/" onClick={() => handleNavigation('/')}>Home</Link>
        </li>

        <li className="dropdown">
          <span onClick={() => handleDropdownToggle('about')}>About</span>
          <ul className={`dropdown-content ${openDropdown === 'about' ? 'show' : ''}`}>
            <li><Link to="/about/ceo-message" onClick={() => handleNavigation('/about/ceo-message')}>Message from C.E.O</Link></li>
            <li><Link to="/about/founder-message" onClick={() => handleNavigation('/about/founder-message')}>Message from Founder</Link></li>
          </ul>
        </li>

        <li><Link to="/mission" onClick={() => handleNavigation('/mission')}>Mission</Link></li>
        <li><Link to="/vision" onClick={() => handleNavigation('/vision')}>Vision</Link></li>
        <li><Link to="/admission" onClick={() => handleNavigation('/admission')}>Admission</Link></li>
        <li><Link to="/contact" onClick={() => handleNavigation('/contact')}>Contact</Link></li>

        <li className="dropdown">
          <span onClick={() => handleDropdownToggle('programs')}>Programs</span>
          <ul className={`dropdown-content ${openDropdown === 'programs' ? 'show' : ''}`}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <li key={num}>
                <Link to={`/programs/course${num}`} onClick={() => handleNavigation(`/programs/course${num}`)}>
                  Course {num}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;