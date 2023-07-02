import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='toggleButton'>
        <button>
            <ReorderIcon/>
        </button>
      </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experiences</Link>
      </div>
    </div>
  )
}
