import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Ericeira",
    date: "Sunday 29th May 11:08",
    temperature: "21",
    description: "cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: "30%",
    windSpeed: "10 m/s"
  };

  return (
    <div className="App">
      <form>
        <input
          class="search-box"
          type="text"
          placeholder="Enter a city"
          autocomplete="off"
        />
        <input class="search-button" type="submit" value="Search" />
      </form>

      <div className="row">
        <div className="col-6">
          <h1>{weatherData.city}</h1>
          <ul>
            <li className="current-date-time">
              Last updated {weatherData.date}
            </li>
            <li className="current-temperature">
              {" "}
              <strong>{weatherData.temperature}℃ </strong>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="current-conditions">
            <li> Wind speed: {weatherData.windSpeed}</li>
            <li> Humidity: {weatherData.humidity} </li>
          </ul>
        </div>
      </div>

      <div class="spacing"></div>

      <div class="footnote">
        <small>
          <a href="https://github.com/IlzeRieba/shecodes_vanilla_weather_app.git">
            Open source code
          </a>{" "}
          by Ilze Rieba
        </small>
      </div>
    </div>
  );
}
