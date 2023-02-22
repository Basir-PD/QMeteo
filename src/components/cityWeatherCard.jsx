import React from "react";
import { useSelector } from "react-redux";
import {
  WiHumidity,
  WiWindBeaufort0,
  WiWindBeaufort1,
  WiWindBeaufort2,
  WiWindBeaufort3,
  WiWindBeaufort4,
  WiWindBeaufort5,
  WiWindBeaufort6,
  WiWindBeaufort7,
  WiWindBeaufort8,
  WiWindBeaufort9,
  WiWindBeaufort10,
  WiDayWindy,
  WiDaySunny,
  WiDayCloudy,
} from "react-icons/wi";

import { MdLocationOn } from "react-icons/md";

function cityWeatherCard({ cityWeather }) {
  const { weatherData, measurement } = useSelector(state => state.weather);

  const renderWindSpeedIcon = () => {
    switch (cityWeather?.windSpeed) {
      case 0:
        return <WiWindBeaufort0 size="3rem" />;
      case 1:
        return <WiWindBeaufort1 size="3rem" />;
      case 2:
        return <WiWindBeaufort2 size="3rem" />;
      case 3:
        return <WiWindBeaufort3 size="3rem" />;
      case 4:
        return <WiWindBeaufort4 size="3rem" />;
      case 5:
        return <WiWindBeaufort5 size="3rem" />;
      case 6:
        return <WiWindBeaufort6 size="3rem" />;
      case 7:
        return <WiWindBeaufort7 size="3rem" />;
      case 8:
        return <WiWindBeaufort8 size="3rem" />;
      case 9:
        return <WiWindBeaufort9 size="3rem" />;
      case 10:
        return <WiWindBeaufort10 size="3rem" />;
      default:
        return <WiDayWindy />;
    }
  };

  const renderWeatherIcon = () => {
    const temperature = cityWeather?.temperature;

    if (temperature >= 20) {
      return <WiDaySunny className="text-yellow-300 spin text-9xl font-extrabold" />;
    } else if (temperature < 20 && temperature >= 15) {
      return <WiDayCloudy className="text-yellow-300 animate-pulse text-9xl font-extrabold" />;
    }
  };

  const getCityName = () => {
    let targetKey = null;
    for (const key in weatherData) {
      if (JSON.stringify(weatherData[key]) === JSON.stringify(cityWeather)) {
        targetKey = key;
        break;
      }
    }

    return targetKey;
  };

  function celsiusToFahrenheit(celsius) {
    let fahrenheit = Math.ceil((celsius * 9) / 5 + 32);
    return fahrenheit;
  }

  return (
    <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md mt-5 p-8 rounded-lg flex flex-col justify-between text-white text-2xl h-96 shadow-xl">
      <div className="flex items-center">
        <MdLocationOn size="1.5rem" />
        <p>{getCityName()}</p>
      </div>

      <div className="grid grid-items-center mx-auto">{renderWeatherIcon()}</div>

      <div className="flex justify-between">
        {measurement === "c" ? (
          <p className="text-5xl xl:text-6xl font-extrabold">{cityWeather?.temperature}°C</p>
        ) : (
          <p className="text-5xl xl:text-6xl font-extrabold">{celsiusToFahrenheit(cityWeather?.temperature)}°F</p>
        )}

        <div>
          <div className="flex items-center space-x-2">
            <WiHumidity size="2rem" /> <p>{cityWeather?.humidity} </p>
          </div>
          <div className="flex items-center space-x-2">
            {renderWindSpeedIcon()} <p>{cityWeather?.windSpeed}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cityWeatherCard;
