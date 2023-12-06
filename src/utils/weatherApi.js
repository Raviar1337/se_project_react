//import APIoptions from "./constants";

// if (temperature >= 86) {
//   return 'hot';
// } else if (temperature >= 66 && temperature <= 85) {
//   return 'warm';
// } else if (temperature <= 65) {
//   return 'cold';
// }

import { APIkey, latitude, longitude } from "./constants";
import { processServerResponse } from "./api";

export const getWeatherInfo = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const weatherApiInfo = {};
  weatherApiInfo.F = data.main.temp;
  weatherApiInfo.location = data.name;
  weatherApiInfo.C = ((data.main.temp - 32) * 5) / 9;

  return weatherApiInfo;
};

export function parseTemp(temperature, currentUnit) {
  if (currentUnit === "F") {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  } else {
    if (temperature >= 30) {
      return "hot";
    } else if (temperature >= 19 && temperature <= 29) {
      return "warm";
    } else if (temperature <= 18) {
      return "cold";
    }
  }
}
