import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
function App() {


  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </>
  )
}

export default App
