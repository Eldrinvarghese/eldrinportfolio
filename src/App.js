import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import ResumeDownload from './ResumeDownload';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      <ResumeDownload />
      <Footer />
    </Router>
  );
};

export default App;
