import { formatLocalTime } from "./formatDate";


const HourlyWeatherCard = ({ time, temp, loading }) => {
  return (
    <div className="hourly-weather-forecast-card">
      <div className="hourly-weather-forecast-date-time">
        <div className={`hourly-weather-forecast-date dynamic-data ${loading ? 'loading' : '' }`}>{formatLocalTime(time, "day")}</div>
        <div className={`hourly-weather-forecast-time dynamic-data ${loading ? 'loading' : '' }`}>{formatLocalTime(time, "hour")}</div>
      </div>
      <div className={`hourly-weather-forecast-temperature dynamic-data ${loading ? 'loading' : '' }`}>{temp}˚C</div>
    </div>
  );
}

export default HourlyWeatherCard