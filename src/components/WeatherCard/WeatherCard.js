import React from "react";
import "./WeatherCard.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

// Other code <image className="weatherCard__image"></image>
function WeatherCard({ temp }) {
  // const currentTemp = temp;

  //todo this is hardcoded and will need to be updated
  //const weatherCardImage = "";

  const currentTemperatureUnit = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <>
      <div
        className="weatherCard"
        // style={{
        //   maxWidth: 1360,
        //   height: 80,
        //   display: "flex",
        //   backgroundImage: `url(${weatherCardImage})`,
        // }}
      >
        <div className="weatherCard__temperature">
          {temp} &deg;{currentTemperatureUnit.currentTemperatureUnit}
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
