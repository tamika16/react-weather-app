import react from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Pittsburgh</h1>
      <ul>
        <li>Wednesday 10:34</li>
        <li>Mostly cloudly</li>
      </ul>
      <div className="row">
        <div className="col-7 mt-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_light.png"
            alt="Light snow"
          />
          <span className="temperature">-7</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-5 mt-4">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 73%</li>
            <li>Wind: 11km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
