import { useRef } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProfileCard from "./components/name_home/profile_card";
import About from "./components/about/about";
import Skills from "./components/skills/Skills";
import ProjectsShowcase from "./components/ProjectShowcase/ProjectShowcase";
// import ProjectPage from "./pages/ProjectPage";
import Edushare from "./components/edushare/edushare";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SikkimTourism from "./components/SikkimTourism/sikkimTourism";
import Indus from "./components/Indus/Indus";
import Education from "./components/education/education";
import ContactForm from "./components/contact/ContactForm";


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const eduRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <div className="Home">
              <Navbar scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} eduRef={eduRef} contactRef={contactRef} />
              <div ref={homeRef}>
                <ProfileCard />
              </div>
              <div style={{ height: "20vh" }}></div>

              <div ref={aboutRef}>
                <About />
              </div>
              <div style={{ height: "20vh" }}></div>

              <div ref={skillsRef}>
                <div style={{ height: "5vh" }}></div>
                <Skills />
              </div>
              <div style={{ height: "20vh" }}></div>
              <div ref={projectsRef}>
              <div style={{ height: "20vh" }}></div>
                <ProjectsShowcase />
              </div>
              <div ref={eduRef}>
              <div style={{ height: "20vh" }}></div>
                <Education />
              </div>
              <div ref={contactRef}>
                <div style={{ height: "20vh" }}></div>
                <ContactForm />
                </div>
            </div>
          }
        />
        
        {/* Project Page */}
        <Route path="/edushare" element={<Edushare />} />
        <Route path="/sikkimTourism" element={<SikkimTourism/>} />
        <Route path="/indus" element={<Indus/>} />
      </Routes>
    </Router>
  );
}

export default App;
