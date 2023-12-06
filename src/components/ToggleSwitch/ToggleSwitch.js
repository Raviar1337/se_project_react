import React from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

// todo make it more fanncy with the F and C bacground

function ToggleSwitch() {
  const currentTemperatureUnit = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggleSwitch">
      <input
        type="checkbox"
        onClick={currentTemperatureUnit.handleToggleSwitchChange}
      />
      <span className="toggleSwitch__slider" />
      <div className="toggleSwitch__letterContainer">
        <p className="toggleSwitch__letter">F</p>
        <p className="toggleSwitch__letter">C</p>
      </div>
    </label>
  );
}

export default ToggleSwitch;
