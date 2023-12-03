import React from 'react';
import "./intro.css";
import SearchContent from "./search-content";
import Video from "../assets/background-video.mp4";
export default function Intro() {


  return (
    
    <div className="body-title">
      <div className="video-container">
        <div className="overlay">
          <h1>Rental Booking Site</h1>
          <SearchContent />
        </div>
        <video autoPlay loop muted id="video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

  );
}
