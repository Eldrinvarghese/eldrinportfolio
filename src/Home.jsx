import React from 'react';

const Home = () => {
  return (
    <main style={styles.mainContainer}>
      <h2 style={styles.heading}>Welcome to My Website</h2>
      <p style={styles.paragraph}>This is the home page. Explore more about us in the About section.</p>
    </main>
  );
};

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
    color: '#333',
    padding: '0 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#0073e6',
  },
  paragraph: {
    fontSize: '1.25rem',
    maxWidth: '600px',
    lineHeight: '1.6',
    color: '#555',
  },
};

export default Home;
