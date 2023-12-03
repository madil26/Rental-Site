import React from 'react';
import './ResortList.css'

function ResortsList({ resorts }) {
  return (
    <div>
      <h3>Your Search dates: {'12-14-2023 to 01-23-2024'}</h3>

      <div className="booking-container">
        <div className="img-container">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="myImg"
          ></img>
        </div>

        <div className="card">
          <h1>Milenium Hotel Tokyo</h1>
          <div className="card-bottom">
            <h4>3.5/5 rating</h4>
            <h4>89 ratings</h4>
            <h4>Available xx to xx dates</h4>
          </div>
          <div className='card-book'>
        <button type='submit'>Book Now</button>
        </div>
        </div>

        


      </div>

    </div>
  );
}

export default ResortsList;
