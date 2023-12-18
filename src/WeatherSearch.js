import "./App.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({ ready: false });

  function changeCity(event) {
    setCity(event.target.value);
  }
  function onCurrentEvent(event) {
    event.preventDefault();
    setCity("CapeTown");
    let apikey = "8c78e9e7e9928cd1a2a6f923072c3dec";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=CapeTown&appid=${apikey}&units=metric`;
    axios.get(apiurl).then(showForecast);
  }

  function submitEvent(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c78e9e7e9928cd1a2a6f923072c3dec&units=metric`;
    axios.get(url).then(showForecast);
  }

  function showForecast(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000).toDateString(),
    });
  }

  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="Weather-app">
          <form className="search-form" id="search-form" onSubmit={submitEvent}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  id="city-input"
                  onChange={changeCity}
                />
                <input
                  type="submit"
                  value="Search"
                  className=" btn btn-primary"
                />
                <button
                  className="btn btn-success ml-2"
                  type="submit"
                  onClick={onCurrentEvent}
                >
                  Current
                </button>
              </div>
            </div>
          </form>
          {weather && (
            <div>
              <h1 id="city">{weather.city}</h1>
              <ul>
                <li>
                  Last updated: <span id="date">{weather.date}</span>
                </li>
                <li id="description">{weather.description}</li>
              </ul>
              <div claseNamw="row">
                <div className="col-6">
                  <div className="clearfix weather-icon">
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                      alt={weather.description}
                      id="icon"
                      className="float left"
                    />
                    <span className="weather-app-temperature" id="temperature">
                      <strong>{weather.temp}</strong>
                    </span>
                    <span class="units">
                      <a href="/" id="celsius-link" class="active">
                        °C
                      </a>{" "}
                      |
                      <a href="/" id="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Humidity: <span id="humidity">{weather.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{weather.wind}</span> km/h
                    </li>
                  </ul>
                </div>
              </div>
              <div className="weather-forecast" id="forecast">
                <div className="row">
                  <div className="col-3">
                    <div className="weather-forecast-date">Mon</div>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                      alt=""
                      width="42"
                    />
                    <div className="weather-forecast-temperature">
                      <span className="weather-forecast-temperature-max">
                        {" "}
                        {weather.temp}°{" "}
                      </span>
                      <span className="weather-forecast-temperature-min">
                        {" "}
                        {weather.temp} °{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <small>
          <a href="https://github.com/Thandokazi2000/Weather-app">
            Open-source code{" "}
          </a>
          by Thandokazi Notyalwa
        </small>
      </div>
    </div>
  );
}
