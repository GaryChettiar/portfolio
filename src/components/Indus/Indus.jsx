import React from 'react';
import './Indus.css';
import projectBanner from '../../assets/indus2.jpg'; // Update path if needed
import GithubIcon from "../../assets/github1.png";
const Indus = () => {
  return (
    <div className="indus-project-page">
       <div className="indus-project-title">
       <h2 style={{marginLeft:"30px",marginRight:"0px",marginTop:"0px",marginBottom:"0px",textAlign:"left"
        }}>Web development internship at The Indus Group</h2>
        <h2 style={{marginRight:"2%"}}>JUN 2024- AUG 2024</h2>
        </div> 
      <div className="indus-banner">
        <img src={projectBanner} alt="Project Banner" className="indus-banner-image" />
      </div>

      <div className="indus-project-content">
       
        <p>Web Development Internship</p>
       
        <ul>
          <li>Developed and maintained high-quality web components using React, HTML, and CSS, which led to a 30% improvement in overall site performance.</li>
          <li>Implemented interactive UI elements using modern frameworks such as Bootstrap and Tailwind CSS, contributing to a 25% increase in user engagement.</li>
          <li>Optimized frontend code to ensure faster load times, improving user experience and reducing bounce rates by 20%.</li>
          <li>Collaborated with the UI/UX team to design intuitive interfaces in Figma, increasing customer satisfaction by 15%. 
          Integrated API calls using Node.js, improving backend communication efficiency.</li>
        </ul>
        <h3 style={{margin:"0px"}}>Tools used</h3>
        <ul>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>  
          <li>Postman</li>
         
        </ul>
      </div>
    </div>
  );
};

export default Indus;
