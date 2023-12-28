import React from "react";
import "../styles/Project.css";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  const projectName = { __html: name };

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1
        style={{ fontSize: "large", color: "#021f6a" }}
        dangerouslySetInnerHTML={projectName}
      />
    </div>
  );
}

export default ProjectItem;
