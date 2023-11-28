import React from "react";
import YoutubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://web.facebook.com/deelaka.kariyawasam/?locale=ms_MY&_rdc=1&_rdr">
          <FacebookIcon />
        </a>
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
      <p>&copy; 2023 PDW Kariyawasam</p>
    </div>
  );
}

export default Footer;
