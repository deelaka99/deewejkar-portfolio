import React from 'react'
import ProjectItem from '../components/ProjectItem'
import ProjImg1 from '../assets/p1.jpeg'
import ProjImg2 from '../assets/p2.png'
import '../styles/Project.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name="Fit360 Fitness Tracker App" image={ProjImg1}/>
        <ProjectItem name="Restaurent Management System" image={ProjImg2}/>
      </div>
    </div>
  )
}

export default Projects
