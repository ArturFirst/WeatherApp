import key from '../APIkey/key.js';
import weatherDataParser from '../weatherDataParser/weatherDataParser.js';
import cityList from '../cityList/cityList.js';

 const weatherCityRequest = async (cityName) => {

  const reqBase = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;

  const getData = async (url) => {
    
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch`)
    }

    return await res.json();
  };

    const weatherData = await getData(reqBase);
    
    return weatherData;
  
}

const weatherRequestService = async () => {
    const cities = Object.values(cityList);
    try {
        const request = await Promise.all(cities.map(weatherCityRequest));
        const result = request.map(weatherDataParser);
        return result;
    } catch {
        throw new Error(`Could not fetch`);
    }
    
    
}


export default weatherRequestService;