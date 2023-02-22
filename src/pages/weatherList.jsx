import React from "react";
import { useSelector } from "react-redux";
// Components
import CityWeatherCard from "../components/CityWeatherCard";

function weatherList() {
  const { weatherData } = useSelector((state) => state.weather);

  const cities = Object.keys(weatherData).map((city) => {
    const cityData = weatherData[city];

    return (
      <div key={city}>
        <CityWeatherCard cityWeather={cityData} />
      </div>
    );
  });

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 mt-20 p-8">
        {cities}
      </div>
    </div>
  )
}

export default weatherList;
