import APIoptions from "./constants";

const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

function getWeatherInfo(APIoptions) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${APIoptions.latitude}&lon=${APIoptions.longitude}&units=imperial&appid=${APIoptions.APIkey}`,
    {
      method: "GET",
    }
  )
    .then(processResponse)
    .then((res) => console.log(res));
}

getWeatherInfo(APIoptions);
