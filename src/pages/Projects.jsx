import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <h2 className="p-formatter">Web</h2>
      <div className="projectList">
        {ProjectList.map((project, idx) =>
          project.specialization === "Web" ? (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          ) : null
        )}
      </div>

      <h2 className="p-formatter">Mobile</h2>
      <div className="projectList">
        {ProjectList.map((project, idx) =>
          project.specialization === "Mobile" ? (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          ) : null
        )}
      </div>

      <h2 className="p-formatter">Other</h2>
      <div className="projectList">
        {ProjectList.map((project, idx) =>
          project.specialization === "Code" ? (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Projects;
