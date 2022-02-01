import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return Math.round(((props.fahrenheit - 32) * 5) / 9);
  }
  if (unit === "fahrenheit") {
    return (
      <span>
        <span className="temperature">{props.fahrenheit}</span>
        <small className="temperature-units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |°F
        </small>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{celsius()}</span>
        <small className="temperature-units">
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </small>
      </span>
    );
  }
}
