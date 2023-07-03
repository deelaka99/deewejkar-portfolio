import React from 'react'
import YoutubeIcon from "@mui/icons-material/YouTube";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className="about">
        <h2>Hi, My name is Deelaka Wejtih</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href=""><LinkedInIcon/></a>          
          <a href=""><GithubIcon/></a>
          <a href=""><YoutubeIcon/></a>
        </div>
      </div>
      <div className="skills">
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, Bootstrap, TailwindCSS, MUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Laravel, PHP, NodeJS, MySQL 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              Java, JS, Python, C#, C, TypeScript
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;