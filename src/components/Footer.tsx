import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

interface FooterProps {
  toggleTheme: () => void;
  theme: 'gold' | 'sea-blue';
}

const currentYear = new Date().getFullYear();

const Footer: React.FC<FooterProps> = ({ toggleTheme, theme }) => {
  return (
    <footer>
      <div className="content">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mission">Mission</Link></li>
            <li><Link to="/vision">Vision</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <p>&copy; {currentYear} | Contact us on: 
          <a href="tel:+233558536540">0558536540</a>
        </p>
        <p className="powered-by">Powered by Test-GiftedBabies</p>

        {/* Theme Switcher Button */}
        <button onClick={toggleTheme} className="theme-switcher">
          {theme === 'gold' ? '🌞' : '🌊'}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
