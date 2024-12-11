import React from "react";

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <div className="btn-group my-3">
      <button
        className={`btn ${unit === "metric" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => onToggle("metric")}
      >
        Celsius
      </button>
      <button
        className={`btn ${unit === "imperial" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => onToggle("imperial")}
      >
        Fahrenheit
      </button>
    </div>
  );
};

export default UnitToggle;
