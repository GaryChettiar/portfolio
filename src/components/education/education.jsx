import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">EDUCATION</h2>
      <div className="circle-container">
        <div className="circle">
          <div className="circle-content">
            <span className="percentage">85%</span>
            <span className="label">Class 10th</span>
          </div>
        </div>
        <div className="circle">
          <div className="circle-content">
            <span className="percentage">71.50%</span>
            <span className="label">Class 12th</span>
          </div>
        </div>
        <div className="circle">
          <div className="circle-content">
            <span className="percentage">8</span>
            <span className="label">CGPA</span>
            <span className="sub-label">B.Tech CSE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
