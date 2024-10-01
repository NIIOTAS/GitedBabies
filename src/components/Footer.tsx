import React from 'react';

// Get the current year dynamically
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <div style={contentStyles}>
        <p style={textStyles}>&copy; {currentYear} | contact us on: 
          <a 
            href="tel:+233540918937" //subject to change Using c.e.o's phone number
            style={phoneLinkStyles}
          >
            0540918937
          </a>
        </p>
        <p style={poweredByStyles}>Powered by GiftedBabies</p>
      </div>
    </footer>
  );
};

// Styles
const footerStyles: React.CSSProperties = {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '10px 0',
    boxSizing: 'border-box',
    boxShadow: '0 4px 8px rgba(255, 255, 255, 0.3), 0 6px 20px rgba(0, 0, 0, 0.2), 0 10px 40px rgba(0, 0, 0, 0.3)', 
    marginTop: 'auto',
  };

const contentStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column', // Change to column to stack the text
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
};

const textStyles: React.CSSProperties = {
  margin: 0,
};

const poweredByStyles: React.CSSProperties = {
  fontSize: '14px',  // Slightly smaller font for the powered by statement
  color: 'lightgray',
};

const phoneLinkStyles: React.CSSProperties = {
  marginLeft: '10px',
  color: 'white',
  textDecoration: 'none',
};

export default Footer;
