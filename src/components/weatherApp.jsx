import React, { useState, useEffect } from 'react';
import { createHourlyCards, createDailyCards } from './weatherForecastCards.js';
import { currentWeatherData } from './currentWeatherData.jsx';
import { weatherForecastData } from './weatherForecastData.js';
import { startLoadingState, endLoadingState } from "./setLoadingState.js";


const API_KEY = process.env.VITE_API_KEY; // Assuming you're using Vite for environment variables

const WeatherApp = () => {
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    createHourlyCards();
    createDailyCards();
    getUserLocation();
  }, []);

  const fetchWeatherData = async (data) => {
    try {
      await startLoadingState();
      await currentWeatherData(data, API_KEY);
      await weatherForecastData(data, API_KEY);
      await endLoadingState();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const getUserLocation = async () => {
    try {
      const position = await getCurrentLocation();
      const data = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      await fetchWeatherData(data);
    } catch (error) {
      fetchWeatherData('Istanbul');
    }
  };

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData(searchInput);
  };

  return (
    <div className="weather-app">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="search-box-input"
          placeholder="Enter location..."
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button type="submit" className="cta-button">
          Search
        </button>
      </form>

      <button className="gps-button" onClick={getUserLocation}>
        Get Current Location
      </button>

      {/* Add your weather display components here */}
    </div>
  );
};

export default WeatherApp;
