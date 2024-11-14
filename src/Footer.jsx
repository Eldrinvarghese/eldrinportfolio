import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={contactStyle}>
        Contact: <a href="mailto:eldrinvv@gmail.com" style={linkStyle}>eldrinvv@gmail.com</a> | Phone: <a href="tel:+9074221104" style={linkStyle}>9074221104</a>
      </p>
      <p style={socialStyle}>
        LinkedIn: 
        <a href="https://www.linkedin.com/in/Eldrin-Varghese-981662291" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Eldrin Varghese
        </a>
      </p>
    </footer>
  );
};

// Inline styles
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
  fontSize: '16px',
  fontFamily: 'Arial, sans-serif',
};

const contactStyle = {
  margin: '10px 0',
};

const socialStyle = {
  margin: '10px 0',
};

const linkStyle = {
  color: '#ffd700',
  textDecoration: 'none',
};

export default Footer;
