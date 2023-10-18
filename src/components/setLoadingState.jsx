import React, { useState, useEffect } from 'react';

const LoadingComponent = () => {
  const [loading, setLoading] = useState(false);

  const startLoadingState = () => {
    setLoading(true);
  };

  const endLoadingState = () => {
    setLoading(false);
  };

  useEffect(() => {
    const dynamicDataElements = document.querySelectorAll('.dynamic-data');
    const searchBoxInput = document.querySelector('.search-box-input');

    if (loading) {
      searchBoxInput.blur();

      dynamicDataElements.forEach((element) => {
        element.classList.add('loading');
      });
    } else {
      dynamicDataElements.forEach((element) => {
        element.classList.remove('loading');
      });
    }
  }, [loading]);

  return null; // Return null as this component doesn't render any UI elements
};

export default LoadingComponent;
