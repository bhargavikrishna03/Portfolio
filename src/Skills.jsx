import React from 'react'
import './Skills.css'
import SkillCard from'./SkillCard.jsx'
function Skills() {
  return (
    <>
      <section className="skills" id="skills">
        <div className="skill-header">
          <span className="skills-subtitle">My Expertise</span>
          <h2 className="skills-title">Technologies I work With</h2>
          <p className="skills-description">
            A collection of technologies and tools I used to build responsive, functional and user-friendly digital experiences.
          </p>
        </div>
        <div className="skills-grid">
          <SkillCard
            number="01"
            title="Frontend Development" description="Building responsive and interactive user interfaces with modern frontend technologies."
            skills={[" HTML, "," CSS, "," JavaScript, "," React.js"]}
          />
          <SkillCard
            number="02"
            title="Backend Developmet" description="Creating server-side applications and APIs to power modern web applications."
            skills={["Node.js, ","Express.js "]}
          />
          <SkillCard number="03" title="Database" description="Working with databases to store, manage, and retrieve application data efficiently." skills={["MogoDB, ", "MySQL, ", " SQL"]} />
          <SkillCard number="04" title="Programming & DSA" description="Strong foundation in programming concepts, problem solving, and object-oriented programming." skills={["C, ", "C++, ", "OOP, ", "DSA"]} />
          <SkillCard number="05" title="Design & CMS " description="Designing clean, user-friendly interfaces and creating responsive websites and landing pages using modern design tools and content management platforms." skills={["Figma, ", "WordPress, ", "Elementor"]} />
          <SkillCard number="06" title="Tools & Platforms" description="Using modern development tools and platforms to build, manage, test, and organize web development projects efficiently." skills={["Git, ", "GitHub, ","VS Code, ","MongoDB Compass"]} />
      </div>
    </section>
    </>
  )
}

export default Skills