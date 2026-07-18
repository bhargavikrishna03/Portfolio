import React from 'react'
import "./Project.css"

function ProjectCard({title,category,description,video,technologies,github,live}) {
  return (
    <>
      <div className="project-card">
        <div className="project-video">
          <video src={video} controls muted playsInline></video>
        </div>
        <div className="project-content">
          <p className="project-number">{category}</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="project-tech">{technologies.map((tech, index) => (<span key={index}>{tech}</span>))}</div>
          <div className="project-links">
            <a href={live} className='live-btn' target='_blank' rel="noreferrer">Live Demo</a>
            <a href={github} className='github-btn' target='_blank' rel='noreferrer'>GitHub</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard