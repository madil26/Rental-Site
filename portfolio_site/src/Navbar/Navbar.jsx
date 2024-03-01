import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav'>
        <ul className='list'>
        <li className='about'><a href='css'>About Me</a></li>
            <li className='projects'><a href='sda'>Projects</a></li>
            <li className='Experience'><a href='saasd'>Experience</a></li>
        </ul>
    </div>
  )
}
