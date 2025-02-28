import React from 'react';
import './edushare.css';
import projectBanner from '../../assets/edushare2.jpg'; // Update path if needed
import GithubIcon from "../../assets/github1.png";
const Edushare = () => {
  return (
    <div className="edu-project-page">
       <div className="edu-project-title">
       <h2 style={{marginLeft:"30px",marginRight:"0px",marginTop:"0px",marginBottom:"0px",textAlign:"left"
        }}>Edushare</h2>
         <a href="https://github.com/GaryChettiar/EduShare" target="_blank" rel="noopener noreferrer"> 
            <div className="edu-github-black">
            <img src={GithubIcon} alt="GitHub Icon" className="edu-github-icon" />
            <span>View on GitHub</span>
          </div></a>
        </div> 
      <div className="edu-banner">
        <img src={projectBanner} alt="Project Banner" className="edu-banner-image" />
      </div>

      <div className="edu-project-content">
       
        <p>A platform that provide a user friendly environment to collaborate and work together on a project irrespective of being from different college and university. An integrated platform is to be developed that serves as a centralized repository for universities and colleges to collaboratively showcase the diverse projects undertaken by their students.</p>
        <h3 style={{margin:"0px"}}>Tools used</h3>
        <ul>
          <li>Flutter</li>
          <li>Firebase</li>
          <li>Figma</li>
        </ul>
        <p><b>Credits: </b><a href='https://www.linkedin.com/in/nishant-raj-033703246/' className='edu-credits'>Nishant Raj</a></p>
      </div>
    </div>
  );
};

export default Edushare;
