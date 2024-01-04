import React, { useState } from "react";
import "./navbar.css";
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Navbar() {

  const [nav,setNav] = useState(false)
  const handleNav = () =>(!nav)


  return (
        <div className="nav-container">
          <div className="logo">
            <h2>Rentals</h2>
          </div>
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li>About Us</li>
            <li>Destinations</li>
            <li>Register</li>
            <li><a href="/login">Login</a></li>
          </ul>
          <div className="nav-icons">
            <BsPerson className='icon'></BsPerson>
          </div>

          <div className="hamburger" onClick={handleNav}>
            <HiOutlineMenuAlt4 className='icon'/>
          </div>
      
          <div className={nav ? "mobile-menu active": "mobile-menu"}>
            <ul className="mobile-nav">
            <li><a href="/">Home</a></li>
            <li>About Us</li>
            <li>Destinations</li>
            <li>Register</li>
            <li>Login</li>
            </ul>
            <div className="mobile-menu-bottom">
              <div className="menu-icons">
              <button>Account</button>
              </div>
              <div className="social-icons">
                <FaFacebook className='icon'/>
                <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
              </div>
            </div>
          </div>

        </div>
  );
}
