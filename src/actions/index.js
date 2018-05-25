import axios from 'axios';

// const WEATHER_API_KEY = 'b6907d289e10d714a6e88b30761fae22';
const WEATHER_API_KEY = '03296b71b4ed08db1179ba74e441a6d5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
