import React from "react";

const SavedCities = ({ cities, onSelect }) => {
  return (
    <div className="mt-4">
      <h5>Saved Cities</h5>
      <ul className="list-group">
        {cities.map((city) => (
          <li
            key={city}
            className="list-group-item list-group-item-action"
            onClick={() => onSelect(city)}
            style={{ cursor: "pointer" }}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCities;
