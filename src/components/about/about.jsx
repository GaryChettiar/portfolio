import React from 'react'
import  pfp  from "../../assets/p2.jpg";
import './about.css'
import Resume from "../../assets/gary_smit.pdf";
const About = () => {
  const openPdf = () => {
    window.open(Resume, "_blank"); // Opens in a new tab
  };
  return (
    <div className="about-card">
        <div className="about-image-container">
        <img src={pfp}  alt="Gary Chettiar" className="about-image" />
      </div>
      <div className="about-text">
      
        <p className="about-description">
        Hi! I'm <span className="highlight">Gary</span>, a third-year Computer Science student at Sikkim Manipal Institute of Technology with a passion for development. Whether it's building applications for the mobile or the web, I love creating new things. I'm also a gaming enthusiast on a journey to craft my own game. Music fuels my creativity, and I enjoy dancing with friends.  
        </p>
        <button type="button" className='Resume' onClick={openPdf}>Resume</button>
      </div>
        
    </div>
  )
}

export default About