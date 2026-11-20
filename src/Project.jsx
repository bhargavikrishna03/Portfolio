import React from 'react'
import './Project.css'
import ProjectCard from './ProjectCard'
import diaryVideo from './videos/Sakha! - Krishna - Microsoft​ Edge 2026-07-17 23-11-25.mp4'
import velvetDripVideo from "./videos/VelvetDrip-Video.mp4";
import cppVideo from './videos/Student Report Card.cpp - Code__Blocks 25.03 2025-09-20 18-14-00.mp4'
// import youtubeClone from './videos/Screen Recording 2024-10-18 210924.mp4'
import expenseTracker from'./videos/Income_Expense - Google Chrome 2026-09-03 17-08-17.mp4'
function Project() {
  const projects = [
    {
      number:"01",
      title: "Personal Diary", category: "FULL STACK", description: "A full-stack diary application with authentication, CRUD operations and a responsive interface.",
      video:diaryVideo, technologies:["React","Node.js","Express","MongoDB","HTML","CSS"],github:"https://github.com/bhargavikrishna03/Diary",live:"#"
    },

  {
  number: "02",
  title: "Velvet Drip",
  category: "WEB DEVELOPMENT",
  description:
    "A responsive cafe website with a menu, search, category filters, a cart and WhatsApp ordering, built with React.",
  video: velvetDripVideo,
  technologies: ["React", "Tailwind CSS", "Context API", "WhatsApp API"],
  github: "https://github.com/bhargavikrishna03/Portfolio/",
  live: "https://velvet-drip.vercel.app/"
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
      title: "expenseTracker",
      category: "FRONTEND DEVELOPMENT",
      description:
        "•	Built CRUD expense tracker with REST APIs, MongoDB storage and real-time UI updates.",
      video: expenseTracker,
      technologies: ["HTML", "CSS", "Flexbox", "CSS Grid"],
      github: "https://github.com/bhargavikrishna03/Expense-Tracker",
      live: "https://expense-tracker-one-nu-29.vercel.app/"
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
