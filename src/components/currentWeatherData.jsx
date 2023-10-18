import React, { useEffect, useState } from 'react';
import { roundDegree, formatDate, mpsToKmh, metersToKm, capitalize } from './convertUnits.jsx';

const WeatherComponent = ({ data, apiKey }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      let API_URL;

      if (data.lat && data.lon) {
        API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}&units=metric`;
      } else {
        API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${apiKey}&units=metric`;
      }

      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`Sorry, we couldn't find ${data}. Please double-check the spelling and try again.`);
          } else {
            throw new Error(
              "Oops! We're having trouble getting the latest weather information right now. Please try again later or contact support if the problem persists."
            );
          }
        }

        const currentWeatherData = await response.json();
        setCurrentWeather(currentWeatherData);
      } catch (error) {
        setError(error.message);
      }
      
    };

    fetchWeatherData();
  }, [data, apiKey]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!currentWeather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={`src/img/animated/${currentWeather.weather[0].icon}.svg`} alt="Weather Icon" />
      <p>Temperature: {roundDegree(currentWeather.main.temp)}</p>
      <p>Description: {capitalize(currentWeather.weather[0].description)}</p>
      <p>Location: {currentWeather.name}</p>
      <p>Date: {formatDate(currentWeather.dt)}</p>
      <p>Wind Speed: {mpsToKmh(currentWeather.wind.speed)}</p>
      <p>Pressure: {currentWeather.main.pressure} hPa</p>
      <p>Sunrise: {formatDate(currentWeather.sys.sunrise, 'hour')}</p>
      <p>Humidity: {currentWeather.main.humidity}%</p>
      <p>Visibility: {metersToKm(currentWeather.visibility)}</p>
      <p>Sunset: {formatDate(currentWeather.sys.sunset, 'hour')}</p>
    </div>
  );
};

export default WeatherComponent;
