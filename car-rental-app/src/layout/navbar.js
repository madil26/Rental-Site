import React from 'react'
import './navbar.css'
export default function Navbar() {
  return (
    <html>
      <nav class="navbar">
        <div className="container-fluid">
          <div className="home-btn-container">
            <a href="/" className="btn-home">
              Home
            </a>
          </div>
          <div className="nav-title">Car Rental Application</div>
        </div>
      </nav>
      </html>
  );
}

