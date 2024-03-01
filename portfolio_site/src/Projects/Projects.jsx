import React from 'react'
import '../Projects/Projects.css'
import LondonLinesPic from './ldn_crowding.png'
import ResortPic from './resort.png'
import { FaGithub } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
export default function Projects() {
  
  return (
    <div >
      <h3 className='projects-title'>Projects</h3>
      <div className='card-container'>
      <div className='card'>
        <img src={LondonLinesPic} alt='london-transport-pic'></img>
        <div className='card-content'>
        <h2><a href='insert_link'>London Transport <FaGithub></FaGithub><HiOutlineExternalLink /></a></h2>
        <h3>Developed using ASP.NET MVC & C#</h3>
      </div>
      </div>

      <div className='card'>
        <img src={ResortPic} alt='resort-finder-pic'></img>
        <div className='card-content'>
        <h2><a href='insert_link'>Resort Finder <FaGithub></FaGithub><HiOutlineExternalLink /></a></h2>
        <h3>Developed using React.js & Spring Java <SiSpring></SiSpring></h3>
      </div>
      </div>
    </div>
    </div>

    
  );
}
