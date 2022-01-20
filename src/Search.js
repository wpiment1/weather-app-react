import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div class="row search-row">
      <form id="search-form" autocomplete="off">
        <input
          type="search"
          placeholder="Enter a city"
          id="search-input"
          class="col-6"
        />
        {/* Search button */}
        <input
          type="submit"
          value="Search"
          class="col-2 search-button btn btn-primary"
        />
        {/* Current loaction button */}
        <input
          type="submit"
          value="Current Location"
          class="col-3 current-location-button btn btn-success"
        />
      </form>
    </div>
  );
}
