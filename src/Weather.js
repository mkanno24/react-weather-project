import React from "react";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-primary"></input>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-3">
          <h1>New York</h1>
        </div>
      </div>
      <ul>
        <div className="row">
          <div className="col-3">
            <li>Wednesday 7.00</li>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <li>Mostly Cloudy</li>
          </div>
        </div>
      </ul>

      <div className="row">
        <div className="col-6">
          6° C
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 83%</li>
            <li>Wind: 4.12 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
