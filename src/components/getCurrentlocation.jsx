export const getCurrentlocation = async () => {
  
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const liveLat = position.coords.latitude;
    const liveLong = position.coords.longitude;

    // console.log("Your current position is:");
    // console.log("Latitude: " + liveLat);
    // console.log("Longitude: " + liveLong);

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${liveLat},${liveLong}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0a53246036mshdb0beb87a636a2cp1b7c91jsnb7b2de34f10d',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null; // Handle the error as needed
  }
 

};

