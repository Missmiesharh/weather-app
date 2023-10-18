import React, { useState, useEffect } from 'react';
import { filterForecastData } from './filterForecastData';
import { roundDegree, formatDate } from './convertUnits';

const WeatherForecast = ({ data, key }) => {
  const [hourlyWeatherForecast, setHourlyWeatherForecast] = useState([]);
  const [dailyWeatherForecast, setDailyWeatherForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      try {
        const API_URL = data.lat && data.lon
          ? `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=${key}&units=metric`
          : `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${key}&units=metric`;

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

        const weatherForecastData = await response.json();

        filterForecastData(weatherForecastData);

        // Prepare data for rendering
        const hourlyData = weatherForecastData.list.slice(0, 5);
        const dailyData = weatherForecastData.list.slice(0, 40);

        setHourlyWeatherForecast(hourlyData);
        setDailyWeatherForecast(dailyData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherForecast();
  }, [data, key]);

  if (error) {
    return <div> Error: {error}</div>;
  }

  return (
    <div>
      {/* Render the hourly and daily weather forecast components using hourlyWeatherForecast and dailyWeatherForecast state */}
    </div>
  );
};

export default WeatherForecast;
