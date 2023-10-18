import React from 'react';

const HourlyWeatherForecastCard = () => {
  return (
    <div className="hourly-weather-forecast-card">
      <div className="hourly-weather-forecast-date-time">
        <div className="hourly-weather-forecast-date loading dynamic-data">&nbsp;</div>
        <div className="hourly-weather-forecast-time loading dynamic-data">&nbsp;</div>
      </div>
      <div className="hourly-weather-forecast-temperature loading dynamic-data">&emsp;&emsp;</div>
    </div>
  );
};

const DailyWeatherForecastCard = () => {
  return (
    <div className="daily-weather-forecast-card">
      <div className="daily-weather-forecast-date-time">
        <div className="daily-weather-forecast-date loading dynamic-data">&nbsp;</div>
        <div className="daily-weather-forecast-time loading dynamic-data">&nbsp;</div>
      </div>
      <img className="daily-weather-forecast-icon loading dynamic-data" />
      <div className="daily-forecast-weather-details">
        <div className="daily-weather-forecast-temperature loading dynamic-data">&emsp;&emsp;</div>
        <div className="daily-weather-forecast-description loading dynamic-data">&emsp;&emsp;</div>
      </div>
    </div>
  );
};

const HourlyWeatherForecast = () => {
  const hourlyCards = [];

  for (let i = 0; i < 5; i++) {
    hourlyCards.push(<HourlyWeatherForecastCard key={i} />);
  }

  return <div className="hourly-weather-forecast-section">{hourlyCards}</div>;
};

const DailyWeatherForecast = () => {
  const dailyCards = [];

  for (let i = 0; i < 40; i++) {
    dailyCards.push(<DailyWeatherForecastCard key={i} />);
  }

  return <div className="daily-forecast-section">{dailyCards}</div>;
};

export { HourlyWeatherForecast, DailyWeatherForecast };
