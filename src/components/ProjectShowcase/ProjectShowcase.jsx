import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import GithubIcon from "../../assets/github1.png";
import Edushare from "../../assets/edushare1.png"
import SikkimTourism from "../../assets/sikkim_tourism1.svg"
import Indus from "../../assets/indus1.png"

const projects = [
  {
    title: "EDUshare",
    description:
      "A platform that provides a user-friendly environment to collaborate and work together on a project irrespective of being from different colleges and universities.",
    image:Edushare,
    icon: GithubIcon,
    link: "/edushare",
    githubLink:"https://github.com/GaryChettiar/EduShare",
    alternate: false,
  },
  {
    title: "Tour Karo",
    description:
      "AI-powered tourist guide system specifically crafted for Sikkim providing personalized, language-adaptive assistance to tourists, facilitating seamless communication and fostering deeper cultural immersion",
    image:SikkimTourism,
    icon: GithubIcon,
    link: "/sikkimTourism",
    githubLink:"https://github.com/GaryChettiar/Sikkim-Tourism",
    alternate: true,
  },
  {
    title: "Web Development Internship at The Indus Group",
    description:
      "Duration : Jun 2024 - Aug 2024",
    image: Indus,
    icon: GithubIcon,
    link: "/indus",
    githubLink:"",
    alternate: false,
  },
];

const ProjectsShowcase = () => {
  return (
    <div className="projects-container">
      <h2>Projects and Internships</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsShowcase;
