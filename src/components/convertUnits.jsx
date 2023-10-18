import React from 'react';

export function convertUnits() {
  const roundDegree = (degree) => {
    if ((Math.round(degree * 10) / 10) % 1 === 0) {
      return `${(Math.round(degree * 10) / 10).toFixed(1)}°C`;
    } else {
      return `${Math.round(degree * 10) / 10}°C`;
    }
  };

  const formatDate = (unixTimestamp, type) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const daysOfWeekShortened = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsOfYearShortened = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = new Date(unixTimestamp * 1000);
    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth();
    const dayOfWeekIndex = date.getDay();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const formattedDate = `${dayOfMonth} ${monthsOfYear[monthIndex]} ${daysOfWeek[dayOfWeekIndex]}`;
    const formattedDateShortened = `${dayOfMonth} ${monthsOfYearShortened[monthIndex]} ${daysOfWeeknomShortened[dayOfWeekIndex]}`;

    if (type === "day") {
      return daysOfWeek[dayOfWeekIndex];
    } else if (type === "hour") {
      return `${hours}:${minutes}`;
    } else if (type === "short") {
      return formattedDateShortened;
    } else {
      return formattedDate;
    }
  };

  const mpsToKmh = (mps) => {
    return `${Math.round(mps * 3.6)} km/h`;
  };

  const metersToKm = (meters) => {
    return `${meters / 1000} km`;
  };

  const capitalize = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  // You can use these functions within your component
  const degree = 22.5;
  const roundedDegree = roundDegree(degree);

  return (
    <div>
      <p>Rounded Degree: {roundedDegree}</p>
      {/* You can use other utility functions in a similar manner */}
    </div>
  );
}

export default convertUnits;
