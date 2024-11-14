import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="profile-section">
      <h2 className="profile-title">Profile</h2>
      <p className="profile-text">
        A third-year engineering student in <strong>Electronics and Computer Science</strong>, passionate about <strong>AI</strong> and <strong>computational modeling</strong>, with experience in high-quality code development and hardware knowledge in electronics.
      </p>
      <p className="profile-text">
        Member of <strong>MAVERICKS_UAS</strong> technical club, actively participating in hackathons like <strong>SAEINDIA</strong>.
      </p>
      <div className="profile-interests">
        <span className="interest-item"> AI & Robotics</span>
        <span className="interest-item">Hackathons</span>
        <span className="interest-item">Electronics</span>
      </div>
    </section>
  );
};

export default Profile;
