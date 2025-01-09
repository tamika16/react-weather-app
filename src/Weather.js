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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Pittsburgh</h1>
      <ul>
        <li>Wednesday 10:34</li>
        <li>Mostly CLoudly</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_light.png"
            alt="Light snow"
          />
          -7°C
        </div>
        <div className="col-6">
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
