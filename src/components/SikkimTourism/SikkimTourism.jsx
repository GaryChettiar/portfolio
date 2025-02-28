import React from 'react';
import './SikkimTourism.css';
import projectBanner from '../../assets/sikkimTourism2.jpg'; // Update path if needed
import GithubIcon from "../../assets/github1.png";
const SikkimTourism = () => {
  return (
    <div className="sikkim-project-page">
       <div className="sikkim-project-title">
       <h2 style={{marginLeft:"30px",marginRight:"0px",marginTop:"0px",marginBottom:"0px",textAlign:"left"
        }}>SikkimToursim</h2>
         <a href="https://github.com/GaryChettiar/Sikkim-Tourism" target="_blank" rel="noopener noreferrer"> 
            <div className="sikkim-github-black">
            <img src={GithubIcon} alt="GitHub Icon" className="sikkim-github-icon" />
            <span>View on GitHub</span>
          </div></a>
        </div> 
      <div className="sikkim-banner">
        <img src={projectBanner} alt="Project Banner" className="sikkim-banner-image" />
      </div>

      <div className="sikkim-project-content">
       
        <p>AI-powered tourist guide system specifically crafted for Sikkim providing personalized, language-adaptive assistance to tourists, facilitating seamless communication and fostering deeper cultural immersion</p>
        <h3 style={{margin:"0px"}}>Tools used</h3>
        <ul>
          <li>Flutter</li>
          <li>Flask</li>
          <li>Figma</li>
          <li>RAG - Retrieval Augmented Generation</li>
        </ul>
        <p><b>Credits: </b><a href='https://www.linkedin.com/in/rajbir-ray-9608852b5/' className='sikkim-credits'>Rajbir Ray</a>,<a href='https://www.linkedin.com/in/ishaan-s-oshima/' className='sikkim-credits'>Ishaan S. Oshima</a>,<a href='https://www.linkedin.com/in/priyanka-karmakar-868371268/' className='sikkim-credits'>Priyanka Karmakar</a></p>
      </div>
    </div>
  );
};

export default SikkimTourism;
