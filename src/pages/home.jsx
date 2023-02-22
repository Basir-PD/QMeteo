import React, { useState, useEffect } from "react";
// Components
import Container from "../components/layout/container";
import SearchInput from "../components/searchInput";
import CityWeatherCard from "../components/cityWeatherCard";
// Store
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../store/features/weather/weatherSlice";

function Home() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  return (
    <Container>
      <div className="min-h-screen grid place-items-center">
        <div>
          <h1 className="text-4xl 2xl:text-5xl uppercase text-white mb-3 text-center font-extrabold">
            Weather <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">Forecast</span>
          </h1>
          <p className="text-xl mb-5 text-left text-gray-300">Your ultimate weather companion.</p>
          <SearchInput />

          {Object.keys(weather?.cityWeather)?.length > 1 && <CityWeatherCard cityWeather={weather?.cityWeather} />}

          {weather?.cityWeather?.notFound && <p className="bg-white mt-4 bg-opacity-30 bg-blur-md p-4 rounded-md text-white">No match found!</p>}
        </div>
      </div>
    </Container>
  );
}

export default Home;
