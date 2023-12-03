import React from "react";
import { useLocation } from "react-router-dom";


export default function ResultsPage() {
  const location = useLocation();
  const { data } = location.state || {};

  console.log("Resorts Results Are: " + JSON.stringify(data));

  return (
    <div className="results-page">
        <h1>Resort Results</h1>

      <div className="bookings">
      {data?.map((myResorts) => (
        <div className="booking-container" key={myResorts.resort_id}>
          <div className="img-container">
            <img src={myResorts.image} alt={myResorts.resort_name}></img>
          </div>

          <div className="card">
            <h1>{myResorts.resort_name}</h1>
            <div className="card-bottom">
              <h4>{`${myResorts.reviews.average_rating}/5  rating`}</h4>
              <h4>{`${myResorts.reviews.num_reviews} reviews`}</h4>
              <h4>
                {`$${myResorts.pricePerNight} /per night`}
              </h4>
              <div className="card-book">
            <button className="book" type="submit">Book Now</button>
          </div>
            </div>
          </div>

         
        </div>
      ))}
    </div>
  </div>
  );
}
