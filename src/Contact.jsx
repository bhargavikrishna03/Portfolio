import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
          <h1 className="contact-sub">Get In Touch</h1>
          <h2 className="contact-title">Let's connect and build something meaningful.</h2>
          <div className="contact-terminal">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">contact-bhargavi</span>
            </div>
            <div className="terminal-content">
              <p className="terminal-line">
                <span className="terminal-command">$ contact Bhargavi</span>
              </p>
              <p className="terminal-line">&gt; Role:<span className='terminal-highlight'>Software Developer</span></p>
              <p className="terminal-line">&gt; Focus: Web Development & Software Engineering</p>
              <p className="terminal-line">&gt; Status: Open to opportunities</p>
              <p className="terminal-line">&gt; Let's build something meaningful together<span className='cursor'></span></p>
              <a href="mailto:krishnabhargavi01@gmail.com" className="contact-btn">Send Message</a>
            </div>
          </div>
          <div className="contact-links">
            <a href="mailto:krishnabhargavi01@gmail.com" className="contact-link">
              <span className="contact-link-title">Email</span>
              <span className="contact-link-value">krishnabhargavi01@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/katikam-bhargavi-5b6723266/" className="contact-link"><span className="contact-link-title">LinkedIn</span><span className="contact-link-value">Connect with me</span></a>
            <a href="https://github.com/bhargavikrishna03" className="contact-link"><span className="contact-link-title">GitHub</span><span className="contact-link-value">View my projects</span></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact