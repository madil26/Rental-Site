import React, { useState, useEffect } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function SearchContent() {
  const navigate = useNavigate();

  const [resortData, setResortData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/resorts/results`);
      const data = response.data;
      setResortData(data); // Update state with fetched data
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  useEffect(() => {
    const fetchDataAndHandle = async () => {
      const data = await fetchData();
      setResortData(data);
    };

    fetchDataAndHandle();
  }, []);

  const [newuniqueCities, setUniqueCities] = useState(new Set());
  useEffect(() => {
    for (const resort in resortData) {
      if (Array.isArray(resortData[resort])) {
        resortData[resort].forEach((obj) => {
          for (const key in obj) {
            const value = obj[key];
            console.log(`Property: ${key}, Value: ${value}`);
          }
        });
      }
      newuniqueCities.add(resortData[resort]["city"]);
    }
  }, [resortData]);

  const fetchResults = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/resorts/results`);
      renderResultsPage(response.data.city);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  const renderResultsPage = () => {
    const matchingResorts = findMatchingResorts(resortData, selectedCity, selectedCheckinDate, selectedCheckoutDate)
    navigate(
      `/results/${selectedCity}/${selectedCheckinDate}/${selectedCheckoutDate}`,
      { state: { data: matchingResorts } } 
    );
    //console.log('THE RENDER REP: ',data);
  };

  const onSubmitSearch = async () => {
    fetchResults();
  };



  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCheckinDate, setCheckinDate] = useState(null);
  const [selectedCheckoutDate, setCheckoutDate] = useState(null);

  const handleCheckinChange = (event) => {
    setCheckinDate(event.target.value);
  };

  const handleCheckoutChange = (event) => {
    setCheckoutDate(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function formatDateString(dateString) {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toISOString().split('T')[0];
    return formattedDate;
  }

  function findMatchingResorts(resortData, city, checkin_dt, checkout_dt) {
    const matchingResorts = [];
    try {
      if (Array.isArray(resortData)) {
        resortData.forEach((resort) => {
          console.log('ResortCity:', resort['city'] )
          const resortCheckinDate = formatDateString(resort.availability.checkin_dt);
          const resortCheckoutDate = formatDateString(resort.availability.checkout_dt);
          //console.log("Resort CI Date : ", resortCheckinDate, "Resort CO Date: " , resortCheckoutDate)
          if (
            resort["city"] === city &&
            resort["availability"] &&
            resortCheckinDate <= checkin_dt &&
            resortCheckoutDate >= checkout_dt
          ) {
            matchingResorts.push(resort);
          }
        });
      }
    } catch (error) {
      console.error('An error occurred while processing resorts:', error);
    }
  
    console.log('Matching Resorts:', matchingResorts);
    

    return matchingResorts;
  }
  

{/*const [compareDate1, setCompareDate1] = useState(new Set());
const [compareDate2, setCompareDate2] = useState(new Set());
useEffect(() => {
  let tempSetD1 = new Set();
  let tempSetD2 = new Set();
  if (Array.isArray(resortData)) {
    resortData.forEach((resort) => {
      if (resort && resort.availability) {
        const checkinDate = formatDateString(resort.availability.checkin_dt)
        const checkoutDate = formatDateString(resort.availability.checkin_dt)
        console.log(`Check-in Date: ${checkinDate}, Checkout-Date: ${checkoutDate}`);
        tempSetD1.add(checkinDate);
        tempSetD2.add(checkoutDate);
      }
    });
  }
  setCompareDate1(tempSetD1);
  setCompareDate2(tempSetD2);
}, [resortData]);

useEffect(() => {
  console.log("Comparison Date 1:", Array.from(compareDate1));
  console.log("Comparison Date 2:", Array.from(compareDate2));
}, [compareDate1]);
*/}

function handleSubmit() {
  console.log("Final value of selectedCity: ", selectedCity);
  console.log("Final value of selectedCheckinDate: ", selectedCheckinDate);
  console.log("Final value of selectedCheckoutDate: ", selectedCheckoutDate);
  const matches = findMatchingResorts(resortData, selectedCity, selectedCheckinDate, selectedCheckoutDate);
  console.log(matches);
}


  return (
    <div className="search-content-container">
      <div className="search-inputs">
        <label className="label-checkin-location" htmlFor="checkin-location">
          <h3>Enter Resort Location:</h3>
          <select onChange={handleCityChange}>
          <option value="" disabled selected hidden>Select a city</option>

            {Array.from(newuniqueCities).map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>

        </label>
        <label className="label-checkin-date" htmlFor="label-checkin-date">
          <h3>Enter Checkin Date:</h3>
          <input
            type="date"
            value={selectedCheckinDate || ''}
            onChange={handleCheckinChange}
          />
        </label>
        <label className="label-checkout-date" htmlFor="label-checkout-date">
          <h3>Enter Checkout Date:</h3>
          <input
            type="date"
            value={selectedCheckoutDate || ''}
            onChange={handleCheckoutChange}
          />
        </label>
        &nbsp;&nbsp;
        <button
          onClick={onSubmitSearch}
          type="button"
          className="btn-search-submit"
        >
          <FontAwesomeIcon icon={fas.faSearch} />
        </button>

        <button onClick={handleSubmit}>Search Resorts</button>
      </div>
    </div>
  );
}
