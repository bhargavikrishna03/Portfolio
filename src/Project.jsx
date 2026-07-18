import React from 'react'
import './Project.css'
import ProjectCard from './ProjectCard'
import diaryVideo from './videos/Sakha! - Krishna - Microsoft​ Edge 2026-07-17 23-11-25.mp4'
import pringlesVideo from './videos/Pringles - Figma 2025-11-08 21-37-13.mp4'
import cppVideo from './videos/Student Report Card.cpp - Code__Blocks 25.03 2025-09-20 18-14-00.mp4'
import youtubeClone from'./videos/Screen Recording 2024-10-18 210924.mp4'
function Project() {
  const projects = [
    {
      number:"01",
      title: "Personal Diary", category: "FULL STACK", description: "A full-stack diary application with authentication, CRUD operations and a responsive interface.",
      video:diaryVideo, technologies:["React","Node.js","Express","MongoDB"],github:"https://github.com/bhargavikrishna03/Diary",live:"#"
    },

    {
      number:"02",
      title: "Pringles Website",
      category: "UI/UX DESIGN",
      description:
        "A modern product website concept designed in Figma with a focus on visual design and user experience.",
      video: pringlesVideo,
      technologies: ["Figma", "UI Design", "Prototyping"],
      github: "#",
      live: "#"
    },

    {
      number:"03",
      title: "C++ Console Applications",
      category: "C++ / OOP",
      description:
        "A collection of console-based applications built using C++, object-oriented programming, and problem-solving concepts.",
      video: cppVideo,
      technologies: ["C++", "OOP", "STL", "Problem Solving"],
      github: "https://github.com/bhargavikrishna03/Student_Report_Card",
      live: "#"
    }, {
      number:"04",
      title: "YouTube-style frontend interface",
      category: "FRONTEND DEVELOPMENT",
      description:
        "A YouTube-inspired frontend interface built using HTML and CSS. The project focuses on creating a structured video platform layout with responsive design, content organization, and modern page styling using CSS Flexbox and Grid.",
      video: youtubeClone,
      technologies: ["HTML", "CSS", "Flexbox", "CSS Grid"],
      github: "https://github.com/bhargavikrishna03/YouTube-Clone",
      live: "#"
    }
  ]
  return (
    <>
      <div className="projects-con">
        <div className="projects-header">
          <h1 className="projects-sub">My Work</h1>
          <p className="projects-description">A collection of projects that showcase my skills in frontend, backend,full-stack development and C++ Console Based Projects.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number}{...project}/>
          ))}
        </div>
        </div>
    </>
  )
}

export default Project