

const DailyWeatherCard = ({date,time,icon,temp,description, loading}) => {
  return (
    <div className="daily-weather-forecast-card">
      <div className="daily-weather-forecast-date-time">
        <div className={`daily-weather-forecast-date dynamic-data ${loading ? 'loading': ''}`}>{date}</div>
        <div className={`daily-weather-forecast-time dynamic-data ${loading ? 'loading': ''}`}>{time}</div>
      </div>
      <img className={`daily-weather-forecast-icon dynamic-data ${loading ? 'loading': ''}`} src={icon} />
      <div className="daily-forecast-weather-details">
        <div className={`daily-weather-forecast-temperature dynamic-data ${loading ? 'loading': ''}`}>{temp}˚C</div>
        <div className={`daily-weather-forecast-description dynamic-data ${loading ? 'loading': ''}`}>{description}</div>
      </div>
    </div>
  );
}

export default DailyWeatherCard