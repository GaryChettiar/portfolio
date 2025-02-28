import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection, homeRef, aboutRef, skillsRef, projectsRef,eduRef ,contactRef}) => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName, section) => {
    setActiveTab(tabName);
    scrollToSection(section);
  };

  // Auto Scroll Active Tab Logic 💪
  useEffect(() => {
    const scrollHandler = () => {
      const sections = [
        { name: "Home", ref: homeRef },
        { name: "About", ref: aboutRef },
        { name: "Skills", ref: skillsRef },
        { name: "Projects", ref: projectsRef },
        { name: "Education", ref: eduRef },
        { name: "Contact", ref: contact },
      ];

      sections.forEach((section) => {
        const sectionTop = section.ref.current.offsetTop - 150; // Adjust for Navbar Height
        const sectionBottom = sectionTop + section.ref.current.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveTab(section.name);
        }
      });
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav className="navbar fixed">
      <ul>
        <li
          className={activeTab === "Home" ? "active" : ""}
          onClick={() => handleTabClick("Home", homeRef)}
        >
          Home
        </li>
        <li
          className={activeTab === "About" ? "active" : ""}
          onClick={() => handleTabClick("About", aboutRef)}
        >
          About
        </li>
        <li
          className={activeTab === "Skills" ? "active" : ""}
          onClick={() => handleTabClick("Skills", skillsRef)}
        >
          Skills
        </li>
        <li
          className={activeTab === "Projects" ? "active" : ""}
          onClick={() => handleTabClick("Projects", projectsRef)}
        >
          Projects
        </li>
        <li
          className={activeTab === "Education" ? "active" : ""}
          onClick={() => handleTabClick("Education", eduRef)} 
        >
          Education
        </li>
        <li
          className={activeTab === "Contact" ? "active" : ""}
          onClick={() => handleTabClick("Contact", contactRef)}
        >
          Contact
        </ li>
      </ul>
    </nav>
  );
};

export default Navbar;
