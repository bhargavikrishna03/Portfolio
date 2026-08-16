import React from 'react'
import './Hero.css'
import ME from '/ME.png'
import Grid from '/gradient.png'
import Project from './Project'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        {/* <span className="hero-tag">Katikam Bhargavi</span> */}
        <h1>Software Developer</h1>
        <p>
          Computer Science graduate passionate about building responsive web
          applications using React, JavaScript, Node.js, and MongoDB. I enjoy
          creating clean user interfaces and solving real-world problems through
          code.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={()=>document.getElementById("projects").scrollIntoView({behavior:"smooth"})}>View Projects</button>
          <a className="secondary-btn" href="/KatikamBhargavi(FullStack).pdf" download>Download Resume</a>
        </div>

      </div>
      <div className="hero-image">
        <img src={Grid} alt="Grid" className="grid-bg" />
        <div className="square one"></div>
        <div className="square two"></div>
        <div className="square three"></div>
        <img src={ME} alt="Bhargavi" className='profile-image' />

      </div>
    </div>
  )
}

export default Hero
