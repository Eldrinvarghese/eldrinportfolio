import React from 'react';
import resumeFile from './Eldrin_Resume.pdf';

const ResumeDownload = () => {
  return (
    <section>
      <h2>Download Resume</h2>
      <a href={resumeFile} download="Eldrin_Varghese_Resume.pdf">
        <button>Download Resume</button>
      </a>
    </section>
  );
};

export default ResumeDownload;
