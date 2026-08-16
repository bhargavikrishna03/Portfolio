import React from 'react'
import './SkillCard.css'
function SkillCard({number,title,description,skills}) {
  return (
    <>
      <div className="skill-card">
        {/* <span className="skill-number">{number}</span> */}
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="skills-tags">
          {skills.map((skill, index)=>(
          <span key={index}>{skill}</span>
          ))}
        </div>
      
      </div>
    </>
  )
}

export default SkillCard
