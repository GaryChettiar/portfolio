import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className={`project-content ${project.alternate ? "reverse" : ""}`}>
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
        { project.githubLink==""?"":<a href={project.githubLink} target="_blank" rel="noopener noreferrer"> 
            <div className="github-button">
            <img src={project.icon} alt="GitHub Icon" className="github-icon" />
            <span>View on GitHub</span>
          </div></a>}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
