import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="WeatherApp">
        <Weather city="New York" country="US" />
      </div>
      <p className="SourceCodeLink">
        <a
          href="https://https://github.com/wpiment1/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
        by Winifer Pimentel
      </p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
