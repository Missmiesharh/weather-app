export const getWeatherData = async (query) => {

    try {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0a53246036mshdb0beb87a636a2cp1b7c91jsnb7b2de34f10d',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return null; // Handle the error as needed
  }
}