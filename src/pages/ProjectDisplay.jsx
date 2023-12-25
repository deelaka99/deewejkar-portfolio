import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const projectName = { __html: project.name };

  const handleFigmaClick = () => {
    const figmaLink = project.figma;

    // Open the link in a new tab
    window.open(figmaLink, "_blank");
  };

  const handleAppLinkClick = () => {
    const appLink = project.appLink;

    // Open the link in a new tab
    window.open(appLink, "_blank");
  };

  const handleGithubClick = () => {
    const githubLink = project.github;

    // Open the link in a new tab
    window.open(githubLink, "_blank");
  };

  const handleActiveSiteClick = () => {
    const activeSiteLink = project.activelink;

    // Open the link in a new tab
    window.open(activeSiteLink, "_blank");
  };

  return (
    <div className="project">
      <h1
        style={{ fontFamily: "monospace", textAlign: "center" }}
        dangerouslySetInnerHTML={projectName}
      />
      <img src={project.image1} alt="project image" />
      <p>
        <b>Specialization:</b> {project.specialization}
      </p>
      <div className="about-project">
        <p>
          <b>Langauges & Tools used:</b>
          {project.skills}
        </p>
        <p>
          <b>
            <center style={{ fontSize: "larger", textDecoration: "underline" }}>
              About the project
            </center>
          </b>
          <br /> {project.desc}
        </p>

        {project.figma ? (
          <p>
            <b className="figmaLink" onClick={handleFigmaClick}>
              Figma Link
            </b>
          </p>
        ) : null}
        {project.specialization === "Mobile" && project.appLink ? (
          <p>
            <b className="figmaLink" onClick={handleAppLinkClick}>
              Download APK
            </b>
          </p>
        ) : null}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <GithubIcon
          className="figmaLink"
          style={{ fontSize: "40px" }}
          onClick={handleGithubClick}
        />
        {project.activelink ? (
          <PublicIcon
            className="figmaLink"
            style={{ fontSize: "40px" }}
            onClick={handleActiveSiteClick}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ProjectDisplay;
