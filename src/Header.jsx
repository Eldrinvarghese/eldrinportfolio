import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Eldrin Varghese Portfolio</h1>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Profile</Link>
        <Link to="/education" style={linkStyle}>Education</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/skills" style={linkStyle}>Skills</Link>
      </nav>
    </header>
  );
};

// Inline styles
const headerStyle = {
  backgroundColor: '#282c34', // Darker background for contrast
  padding: '20px',
  textAlign: 'center',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
};

const titleStyle = {
  fontSize: '2rem',
  margin: '0',
  color: '#ffd700', // Gold color for the title
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '10px',
};

const linkStyle = {
  color: '#61dafb', // Soft blue color for links
  textDecoration: 'none',
  fontSize: '1.1rem',
  transition: 'color 0.3s ease',
};

// Hover effect using JavaScript styling for inline styles
const hoverLinkStyle = {
  ...linkStyle,
  color: '#21a1f1',
};

export default Header;
