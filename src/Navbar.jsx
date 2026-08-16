import React from 'react'
import'./navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">Katikam Bhargavi</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="/KatikamBhargavi(FullStack).pdf" className="resume-btn">Resume</a>
    </div>
    </>
  )
}

export default Navbar
