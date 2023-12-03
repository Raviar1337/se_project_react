// const APIkey = "c44122571bf23cefec328510e217242a";
// const latitude = "0";
// const longitude = "0";

// const APIoptions = {
//   APIkey: "c44122571bf23cefec328510e217242a",
//   latitude: 44.34,
//   longitude: 10.99,
// };

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

const baseUrl = "http://localhost:3001";

const APIkey = "c44122571bf23cefec328510e217242a";
const latitude = 30.83;
const longitude = -83.27;

export { APIkey, latitude, longitude, baseUrl };
