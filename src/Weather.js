import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather () {
  return (
    <div>
      <Search />
      <ul class="place-info">
        <li id="city-country">New York, US</li>
        <li>
          Last Updated: 10:00 <span id="date-time"> </span>
        </li>
        <li id="forecast">Cloudy</li>
      </ul>
      <div class="row">
        <div class="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
            id="icon"
          />
          <span class="temperature">22</span>
          <small class="temperature-units">
            <a href="/" id="celsius" class="active">
              °C
            </a>
            |
            <a href="/" id="fahrenheit">
              °F
            </a>
          </small>
        </div>
        <div class="col-6">
          <ul class="place-characteristics">
            <li>
              Humidity: 80<span id="humidity"></span>%
            </li>
            <li>
              Wind Speed: 8 <span id="wind-speed"> </span> mi/hr
            </li>
            <li>
              Feels Like: 19<span id="feels-like"> </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
