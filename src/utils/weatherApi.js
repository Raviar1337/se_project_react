//import APIoptions from "./constants";

// if (temperature >= 86) {
//   return 'hot';
// } else if (temperature >= 66 && temperature <= 85) {
//   return 'warm';
// } else if (temperature <= 65) {
//   return 'cold';
// }

import { APIkey, latitude, longitude } from "./constants";

export const getWeatherInfo = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const parseWeatherData = (data) => {
  const weatherApiInfo = {};
  weatherApiInfo.temp = data.main.temp;
  weatherApiInfo.location = data.name;
  weatherApiInfo.celsius = ((data.main.temp - 32) * 5) / 9;

  return weatherApiInfo;
};
