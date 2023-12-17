import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.temperature);
    setHumidity(response.data.humidity);
    setWind(response.data.wind);
  }

  let apiKey = "9coc17ee67ta42bb457a6eabfb4f2340";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  function showCelcius(event) {
    event.preventDefault();
  }
  function showfahrenheit(event) {
    event.preventDefault();
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="Weather-app">
          <form class="search-form" id="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  onChange={updateCity}
                />
                <input type="submit" value="Search" />
              </div>
            </div>
          </form>
          <h1 className="city"> {updateCity}</h1>
          <ul>
            <li className="date">Last updated: 9:15</li>
            <li className="description">Sunny</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-icon">
                <img
                  src="https://openweathermap.org/img/wn/01d@2x.png"
                  alt="clear"
                  id="icon"
                  className="float left"
                />
                <span className="weather-app-temperature">
                  <strong>{temperature}23</strong>
                </span>
                <span className="units">
                  <a href="/" onclick={showCelcius}>
                    °C
                  </a>{" "}
                  |
                  <a href="/" onclick={showfahrenheit}>
                    °F
                  </a>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {humidity} 40 %</li>
                <li>Wind: {wind} 5 km/h</li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast">
            <div className="row">
              <div className="col-2">
                <div className="weather-forecast-date">Thu</div>
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                  alt=""
                  width="42"
                />
                <div className="weather-forecast-temperature">
                  <span className="weather-forecast-temperature-max">
                    {" "}
                    19°{" "}
                  </span>
                  <span className="weather-forecast-temperature-min"> 9° </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <small>
          <a href="https://github.com/Thandokazi2000/Weather-app">
            Open-source code
          </a>
          by Thandokazi Notyalwa
        </small>
      </div>
    </div>
  );
}
