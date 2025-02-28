import React from "react";
import "./Skills.css";
import ReactIcon from "../../assets/React.png";
import FigmaIcon from "../../assets/Figma.png";
import GithubIcon from "../../assets/Github.png";
import PythonIcon from "../../assets/Python.png";
import FlutterIcon from "../../assets/Flutter.png";
import FirebaseIcon from "../../assets/Firebase.png";

const skills = [
  { name: "Flutter", icon: FlutterIcon },
  { name: "Firebase", icon:FirebaseIcon },
  { name: "React", icon: ReactIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Python", icon: PythonIcon },
  { name: "Github", icon: GithubIcon },
];
const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;