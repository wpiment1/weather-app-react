import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather (props) {
  return (
    <div>
      <Search />
      <ul class="place-info">
        <li className="city-country">{props.city}, {props.country}</li>
        <li>
          Last Updated: 10:00
        </li>
        <li className="forecast">Cloudy</li>
      </ul>
      <div class="row">
        <div class="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
            className="icon"
          />
          <span class="temperature">22</span>
          <small class="temperature-units">
            <a href="/">
              °C
            </a>
            |
            <a href="/">
              °F
            </a>
          </small>
        </div>
        <div class="col-6">
          <ul class="place-characteristics">
            <li>
              Humidity: 80%
            </li>
            <li>
              Wind Speed: 8 mi/hr
            </li>
            <li>
              Feels Like: 19°
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
