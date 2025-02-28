import React from "react";
import "./ProfileCard.css";
import  pfp  from "../../assets/p1.jpg";


const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-text">
        <h1 className="profile-name">GARY CHETTIAR</h1>
        <p className="profile-description">
          Innovating solutions that <span className="highlight">engage</span>,{" "}
          <span className="highlight">inspire</span>, and{" "}
          <span className="highlight">solve</span> real-world problems.
        </p>
        <p className="profile-role">App Developer | Web Developer</p>
      </div>
      <div className="profile-image-container">
        <img src={pfp}  alt="Gary Chettiar" className="profile-image" />
      </div>
    </div>
  );
};

export default ProfileCard;
