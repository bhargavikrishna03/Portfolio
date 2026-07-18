import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-sub">About</h1>
          <h2 className="about-title">Get to Know Me</h2>
          <p className="about-text">I'm Katikam Bhargavi, a Computer Science graduate passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean and functional interfaces using React, JavaScript, HTML, CSS, Node.js,Express.js and MongoDB.
          <br />
            I continuously improve my skills by building real-world projects, learning new technologies, and solving programming challenges. My goal is to begin my career as a Software Developer where I can contribute, learn, and grow while creating meaningful digital experiences.</p>
          
        </div>
        <div className="about-right">
          <div className="about-card">
            <div className="stat">
              <h2>5+</h2>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h2>7.77</h2>
              <p>CGPA</p>
            </div>
            <div className="stat">
              <h2>2026</h2>
              <p>Graduate</p>
            </div>
             
          </div>
         
        </div>
        {/* <div className="about-info">
            <div className="info-box">
              <p className="info-title">Role</p>
              <p className="info-value">Software Developer</p>
            </div>
            </div>
            <div className="info-box">
              <p className="info-title">Location</p>
              <p className="info-value">India</p>
            </div> */}
        
      </div>
    </div>
  )
}

export default AboutMe