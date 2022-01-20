import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Weather from "./Weather";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
