import React from "react";
import YoutubeIcon from "@mui/icons-material/YouTube";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProfileDP from "../assets/dp2.png";
import Languages from "../components/Languages";
import Certifications from "../components/Certifications";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={ProfileDP} alt="profileDp" />
        <h2>Hi, I am Deelaka Wejth</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/deelaka-wejith-kariyawasam-7a9bb0213/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/deelaka99">
            <GithubIcon />
          </a>
          <a href="https://www.youtube.com/@deelakawejithkariyawasam">
            <YoutubeIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <Languages/>
      </div>
    </div>
  );
}

export default Home;
