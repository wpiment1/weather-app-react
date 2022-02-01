import React from "react";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <ul className="place-info">
        <li className="city-country">
          {props.data.city}, {props.data.country}
        </li>
        <li>
          <FormattedDate />
        </li>
        <li className="forecast text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="icon"
          />
          <span className="temperature">22</span>
          <small className="temperature-units">
            <a href="/">°C</a>|<a href="/">°F</a>
          </small>
        </div>
        <div className="col-6">
          <ul className="place-characteristics">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed: {props.data.windSpeed} mi/hr</li>
            <li>Feels Like: {props.data.feelsLike}°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
