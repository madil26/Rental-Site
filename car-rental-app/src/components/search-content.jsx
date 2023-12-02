import React from 'react'
import './content.css'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchContent() {
  return (
    
    <div className="search-content-container">
        <div className="body-title">Car Rental Application
        </div>
        <div className='search-left'>
        <label className='label-pickup-location' htmlFor="pickup-location">
            Enter Pickup Location:
            <input type="location"></input>
          </label>
          <label className='label-pickup-date' htmlFor="pickup-date">
            Enter Pickup Date:
            <input type="date"></input>
          </label>

          <label className='label-pickup-time' htmlFor="time-select">Enter Pickup Time</label>
          <select id="time-select" name="time-select">
            <option value="8am">8am</option>
            <option value="9am">9am</option>
            <option value="10am">10am</option>
            <option value="Noon">Noon</option>
          </select>
        </div>


        <div className='search-right'>
        <label className='label-dropoff-location' htmlFor="dropff-location">
            Enter Dropoff Location:
            <input type="location"></input>
          </label>
          <label className='label-dropoff-date'htmlFor="dropoff-date">
            Enter Dropoff Date:
            <input type="date"></input>
          </label>

          <label className='label-dropoff-time'>Enter Dropoff Time</label>
          <select id="time-select" name="time-select">
            <option value="8am">8am</option>
            <option value="9am">9am</option>
            <option value="10am">10am</option>
            <option value="Noon">Noon</option>
          </select>

          <div><button type='submit' className='btn-search-submit' >Search Rentals</button>
          <FontAwesomeIcon icon={fas.faSearch} />
          </div>
          

        </div>

        
</div>
  )
}
