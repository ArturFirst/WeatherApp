import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import cityList from '../cityList/cityList.js';


const getDate = (data) => data.slice(0, 10);

const getTime = (data) => data.slice(-8);

const temperature = (data) => `${Math.round(data - 273.15)}`;

const humidity = (data) => `${data}%`;

const windSpeed = (data) => `${Math.round(data)} м/с`;


const weatherByDay = (data, { id }) => {
  
  const { main, 
          weather, 
          wind, 
          dt_txt 
        } = data;
  
  return {
    cityName: cityList[id],
    dayOfWeek: dayjs(getDate(dt_txt)).locale('ru').format("dddd"),
    iconId: weather[0]['id'],
    currTemp: temperature(main.temp),
    maxTemp: temperature(main.temp_max),
    minTemp: temperature(main.temp_min),
    humidity: humidity(main.humidity),
    wind: windSpeed(wind.speed),
  }

}


const weatherFilter = (data, city) => { // dt_txt имеет вид "2020-09-14 00:00:00"
    
    const currDate = getDate(data[0].dt_txt); // берем текущую дату из первого объекта запроса
    
    const result = [data[0]];
    
    const futureWeather = data.filter((item) => getDate(item.dt_txt) !== currDate); // удаляем объекты с погодой на текущий день
    
    const nightTemperature = futureWeather
      .filter((item) => getTime(item.dt_txt) === '00:00:00') 
      .slice(0, 4)
      .map(({ main }) => main.temp_min) // минимальная температура в полночь
    
    
    const targetWeather = futureWeather
      .filter((item) => getTime(item.dt_txt) === '12:00:00')
      .slice(0, 4)  // оставляем объекты с погодой на полдень каждого из 4 дней
      
      targetWeather.forEach(({ main }, i) => main.temp_min = nightTemperature[i]) //  заменяем минимальную температуру

    return result
      .concat(targetWeather)
      .map(( item ) => weatherByDay(item, city));
}


const weatherDataParser = ({ list, city }) => {
    
    const result = weatherFilter(list, city)
    
    return {
      current: result[0],
      forecast: result.slice(1)
    }
}


export default weatherDataParser;

