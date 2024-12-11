import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import SavedCities from "./components/SavedCities";
import UnitToggle from "./components/UnitToggle";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [favoriteCities, setFavoriteCities] = useState(() => {
    return JSON.parse(localStorage.getItem("savedCities")) || [];
  });

  const fetchWeather = async (city) => {
    const API_KEY = "46aab656b0924e52818190607241012"; // Replace with your actual API key
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        alert("City not found!");
      }
    } catch (error) {
      alert("Error fetching weather data!");
    }
  };

  const saveCity = (city) => {
    if (!favoriteCities.includes(city)) {
      const updatedCities = [...favoriteCities, city];
      setFavoriteCities(updatedCities);
      localStorage.setItem("savedCities", JSON.stringify(updatedCities));
    }
  };

  return (
    <div className="container text-center">
      <div>
        <header className="App-header py-4">
        </header>
        <div className="name">
          <h1>Weather Dashboard</h1>
        </div>
        <SearchBar onSearch={fetchWeather} />
        {weather && (
          <WeatherCard
            weather={weather}
            unit={unit}
            onSave={() => saveCity(weather.location.name)} // Corrected function call
          />
        )}
        <UnitToggle unit={unit} onToggle={setUnit} />
        <SavedCities cities={favoriteCities} onSelect={fetchWeather} />
      </div>
    </div>
  );
};

export default App;