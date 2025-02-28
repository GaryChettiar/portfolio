import React from "react";
import "./ContactForm.css";
import GithubIcon from "../../assets/github2.png";
import LinkedIn from "../../assets/linkedin.png";
import InstagramIcon from "../../assets/insta.png";
const ContactForm = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">LET’S CONNECT</h2>
      <div className="form-wrapper">
        <form>
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <textarea placeholder="Message" className="input-field"></textarea>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
      <div className="social-links">
        <hr className="divider" />
        <span className="or-text">OR</span>
        <hr className="divider" />
        <div className="icons">
          <a href="https://www.linkedin.com/in/gary-chettiar-94a508233/"><img src={LinkedIn} alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/its_gary02/"><img src={InstagramIcon} alt="Instagram" /></a>
          <a href="https://github.com/GaryChettiar"><img src={GithubIcon} alt="GitHub" /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
