import React, { useEffect } from 'react';
import { formatDate } from "./convertUnits"

const ForecastFilter = ({ weatherForecastData }) => {
  useEffect(() => {
    const filterContainer = document.querySelector('.filter-container');
    const body = document.querySelector('body');

    const filterByDate = (date) => {
      const dailyWeatherForecastDates = document.querySelectorAll('.daily-weather-forecast-date');

      dailyWeatherForecastDates.forEach((dailyWeatherForecastDate) => {
        if (date === 'All Days' || dailyWeatherForecastDate.innerHTML === date) {
          dailyWeatherForecastDate.parentElement.parentElement.style.display = 'flex';
        } else {
          dailyWeatherForecastDate.parentElement.parentElement.style.display = 'none';
        }
      });k
    };

    const setupFilterContainer = () => {
      if (filterContainer) {
        filterContainer.remove();
      }

      const uniqueDates = new Set(['All Days']);

      for (let i = 0; i < weatherForecastData.list.length; i++) {
        uniqueDates.add(formatDate(weatherForecastData.list[i].dt, 'short'));
      }

      const newFilterContainer = document.createElement('div');
      newFilterContainer.classList.add('filter-container');

      body.insertBefore(newFilterContainer, body.children[4]);

      newFilterContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        newFilterContainer.scrollLeft += event.deltaY * 2;
      });

      uniqueDates.forEach((uniqueDate) => {
        const filterItem = document.createElement('div');
        filterItem.classList.add('filter-item');

        if (uniqueDate === 'All Days') {
          filterItem.classList.add('active');
        }

        filterItem.innerHTML = uniqueDate;

        newFilterContainer.appendChild(filterItem);

        filterItem.addEventListener('click', () => {
          const filterItems = document.querySelectorAll('.filter-item');

          filterItems.forEach((item) => {
            item.classList.remove('active');
          });

          filterItem.classList.add('active');
          filterByDate(filterItem.innerHTML);
        });
      });
    };

    setupFilterContainer();
    filterByDate('All Days');
  }, [weatherForecastData]);

  return null; // Return null as we don't need to render anything for this component
};

export default ForecastFilter;
