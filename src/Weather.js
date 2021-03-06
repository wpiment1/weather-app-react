import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({});

  function showCityWeather(response) {
    setWeather({
      loaded: true,
      // date: new Date(response.data.dt * 1000),
      coords: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      windSpeed: Math.round(response.data.wind.speed),
      city: response.data.name,
      country: response.data.sys.country,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiKey = `c6b9367bef797caf22641835dadfda42`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showCityWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div>
        <div className="row search-row">
          <form id="search-form" autoComplete="off" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              className="col-9 search-input"
              onChange={updateCity}
            />
            {/* Search button */}
            <input
              type="submit"
              value="Search"
              className="col-2 search-button btn btn-primary"
            />
            {/* Current loaction button */}
            {/* <input
              type="submit"
              value="Current Location"
              className="col-3 current-location-button btn btn-success"
            /> */}
          </form>
        </div>
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coords}/>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
