import React from "react";

const WeatherCard = ({ weather, onSave }) => {
  return (
    <div className="card mx-auto my-4" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{weather.location.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {weather.current.condition.text}
        </h6>
        <p className="card-text">
          Temperature: {weather.current.temp_c}°C <br />
          Humidity: {weather.current.humidity}% <br />
          Wind: {weather.current.wind_kph} kph
        </p>
        <button className="btn btn-secondary" onClick={onSave}>
        favorite citys
        </button>
      </div>
    </div>
  );
};

export default WeatherCard;
