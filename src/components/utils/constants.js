// const APIkey = "c44122571bf23cefec328510e217242a";
// const latitude = "0";
// const longitude = "0";

// const APIoptions = {
//   APIkey: "c44122571bf23cefec328510e217242a",
//   latitude: 44.34,
//   longitude: 10.99,
// };

export function parseTemp(temperature) {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66 && temperature <= 85) {
    return "warm";
  } else if (temperature <= 65) {
    return "cold";
  }
}
