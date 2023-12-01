import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  const handleButtonClick = () => {
    const googleDriveLink = "https://drive.google.com/file/d/1D0zJELoCiRlpgKH8xrGlJab4KHqZRQ-q/view?usp=drive_link";

    // Open the link in a new tab
    window.open(googleDriveLink, "_blank");
  };

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <div className="left-nav">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experiences</Link>
          <Link to="/special-moments">Special moments</Link>
        </div>
        <div className="right-nav">
          <div className="innerDiv" onClick={handleButtonClick}>
            <div className="cv-btn">Download the CV</div>
          </div>
        </div>
      </div>
    </div>
  );
}
