//import APIoptions from "./constants";

// if (temperature >= 86) {
//   return 'hot';
// } else if (temperature >= 66 && temperature <= 85) {
//   return 'warm';
// } else if (temperature <= 65) {
//   return 'cold';
// }

const APIkey = "c44122571bf23cefec328510e217242a";
const latitude = 30.83;
const longitude = -83.27;

export const getWeatherInfo = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const weatherApiInfo = {};
  weatherApiInfo.temp = data.main.temp;
  weatherApiInfo.location = data.name;
  console.log(weatherApiInfo);
  return weatherApiInfo;
};
